export default {
  OK: {
    status: 200,
    message: 'OK',
  },
  CREATED: {
    status: 201,
    message: 'Created',
  },
  CONFLICT: {
    status: 409,
    message: 'Conflict',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Unauthorized',
  },
  FORBIDDEN: {
    status: 403,
    message: 'Forbidden',
  },
  NOT_FOUND: {
    status: 404,
    message: 'Not Found',
  },
  INVALID_VALUES: {
    status: 422,
    message: 'Invalid Values',
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Internal Server Error',
  },
};
