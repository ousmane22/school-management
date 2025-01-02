export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: any): never {
  if (error.response) {
    throw new ApiError(
      error.response.data?.message || 'API request failed',
      error.response.status,
      error.response.data
    );
  }
  throw new ApiError(error.message || 'Network error');
}