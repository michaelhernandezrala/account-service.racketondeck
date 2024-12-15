export type SuccessResponse = {
  statusCode: number;
  message: string;
  count?: number;
  data?: Record<string, any>;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
  errorCode?: string;
};
