export class ApiError extends Error {
  constructor(message: string = "", public httpStatusCode?: number) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
  }

  public static isApiError(e: any): e is ApiError {
    // for some unknown reasons, after bundling, instanceof does not work
    return e.name === "ApiError";
  }
}
