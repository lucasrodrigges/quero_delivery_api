import * as express from 'express';
import { Request, Response } from 'express';
import responses from '../constants/responses';
import { AsaasEventToPaymentStatus } from '../utils/stateMachine';
import OrderService from '../services/Order';
import { OrderStatusEnum } from '../models/Order';

const { ASAAS_CHARGE_WEBHOOK_TOKEN } = process.env;

const AsaasRoutes = express.Router();

AsaasRoutes.post(
  '/charge',
  async (req: Request, res: Response) => {
    try {
      console.log('tokens =>', req.headers['asaas-access-token'], ASAAS_CHARGE_WEBHOOK_TOKEN);
      if (req.headers['asaas-access-token'] !== ASAAS_CHARGE_WEBHOOK_TOKEN) {
        const { status, message } = responses.UNAUTHORIZED;
        res.status(status).json({ message });
        return;
      }

      const { event, payment } = req.body;
      const {
        orderStatus,
      // sendNotification // TODO
      } = AsaasEventToPaymentStatus[event as keyof typeof AsaasEventToPaymentStatus];

      if (!payment.externalReference) {
        const { status, message } = responses.BAD_REQUEST;
        res.status(status).json({ message });
        return;
      }

      const order = await OrderService.findOrderByCode(payment.externalReference);
      if (!orderStatus || !order || order.status === OrderStatusEnum.CONFIRMED) {
        const { status, message } = responses.OK;
        res.status(status).json({ message });
        return;
      }

      await OrderService.updateOrderAndPaymentStatusByCode({
        code: payment.externalReference,
        orderStatus: orderStatus!,
        paymentStatus: payment.status,
      });

      const { status, message } = responses.OK;
      res.status(status).json({ message });
    } catch (error) {
      const { status, message } = responses.INTERNAL_SERVER_ERROR;
      res.status(status).json({ message });
    }
  },
);

export default AsaasRoutes;
