import { OrderStatusEnum } from '../models/Order';

enum AsaasEvents {
  PAYMENT_CREATED = 'PAYMENT_CREATED',
  PAYMENT_AWAITING_RISK_ANALYSIS = 'PAYMENT_AWAITING_RISK_ANALYSIS',
  PAYMENT_APPROVED_BY_RISK_ANALYSIS = 'PAYMENT_APPROVED_BY_RISK_ANALYSIS',
  PAYMENT_REPROVED_BY_RISK_ANALYSIS = 'PAYMENT_REPROVED_BY_RISK_ANALYSIS',
  PAYMENT_AUTHORIZED = 'PAYMENT_AUTHORIZED',
  PAYMENT_UPDATED = 'PAYMENT_UPDATED',
  PAYMENT_CONFIRMED = 'PAYMENT_CONFIRMED',
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  PAYMENT_CREDIT_CARD_CAPTURE_REFUSED = 'PAYMENT_CREDIT_CARD_CAPTURE_REFUSED',
  PAYMENT_ANTICIPATED = 'PAYMENT_ANTICIPATED',
  PAYMENT_OVERDUE = 'PAYMENT_OVERDUE',
  PAYMENT_DELETED = 'PAYMENT_DELETED',
  PAYMENT_RESTORED = 'PAYMENT_RESTORED',
  PAYMENT_REFUNDED = 'PAYMENT_REFUNDED',
  PAYMENT_PARTIALLY_REFUNDED = 'PAYMENT_PARTIALLY_REFUNDED',
  PAYMENT_REFUND_IN_PROGRESS = 'PAYMENT_REFUND_IN_PROGRESS',
  PAYMENT_RECEIVED_IN_CASH_UNDONE = 'PAYMENT_RECEIVED_IN_CASH_UNDONE',
  PAYMENT_CHARGEBACK_REQUESTED = 'PAYMENT_CHARGEBACK_REQUESTED',
  PAYMENT_CHARGEBACK_DISPUTE = 'PAYMENT_CHARGEBACK_DISPUTE',
  PAYMENT_AWAITING_CHARGEBACK_REVERSAL = 'PAYMENT_AWAITING_CHARGEBACK_REVERSAL',
  PAYMENT_DUNNING_RECEIVED = 'PAYMENT_DUNNING_RECEIVED',
  PAYMENT_DUNNING_REQUESTED = 'PAYMENT_DUNNING_REQUESTED',
  PAYMENT_BANK_SLIP_VIEWED = 'PAYMENT_BANK_SLIP_VIEWED',
  PAYMENT_CHECKOUT_VIEWED = 'PAYMENT_CHECKOUT_VIEWED',
}

export const AsaasEventToPaymentStatus:
{ [key in AsaasEvents]: {
  orderStatus: OrderStatusEnum | null;
  sendNotification: boolean;
} } = {
  [AsaasEvents.PAYMENT_CREATED]: {
    orderStatus: OrderStatusEnum.PENDING,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_AWAITING_RISK_ANALYSIS]: {
    orderStatus: OrderStatusEnum.PENDING,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_APPROVED_BY_RISK_ANALYSIS]: {
    orderStatus: OrderStatusEnum.CONFIRMED,
    sendNotification: true,
  },
  [AsaasEvents.PAYMENT_REPROVED_BY_RISK_ANALYSIS]: {
    orderStatus: OrderStatusEnum.FAILED,
    sendNotification: true,
  },
  [AsaasEvents.PAYMENT_AUTHORIZED]: {
    orderStatus: OrderStatusEnum.PENDING,
    sendNotification: true,
  },
  [AsaasEvents.PAYMENT_UPDATED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_CONFIRMED]: {
    orderStatus: OrderStatusEnum.PENDING,
    sendNotification: true,
  },
  [AsaasEvents.PAYMENT_RECEIVED]: {
    orderStatus: OrderStatusEnum.CONFIRMED,
    sendNotification: true,
  },
  [AsaasEvents.PAYMENT_CREDIT_CARD_CAPTURE_REFUSED]: {
    orderStatus: OrderStatusEnum.FAILED,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_ANTICIPATED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_OVERDUE]: {
    orderStatus: OrderStatusEnum.FAILED,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_DELETED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_RESTORED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_REFUNDED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_PARTIALLY_REFUNDED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_REFUND_IN_PROGRESS]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_RECEIVED_IN_CASH_UNDONE]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_CHARGEBACK_REQUESTED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_CHARGEBACK_DISPUTE]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_AWAITING_CHARGEBACK_REVERSAL]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_DUNNING_RECEIVED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_DUNNING_REQUESTED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_BANK_SLIP_VIEWED]: {
    orderStatus: null,
    sendNotification: false,
  },
  [AsaasEvents.PAYMENT_CHECKOUT_VIEWED]: {
    orderStatus: null,
    sendNotification: false,
  },
};
