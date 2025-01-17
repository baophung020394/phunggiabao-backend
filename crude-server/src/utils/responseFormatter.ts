export interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
  error?: string;
}

export const formatResponse = (
  success: boolean,
  data: any = null,
  message: string = "",
  error: string = ""
): ApiResponse => {
  return {
    success,
    data,
    message,
    error,
  };
};
