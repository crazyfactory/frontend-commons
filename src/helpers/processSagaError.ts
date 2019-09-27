import {ApiError} from "../models/ApiError";

export function processSagaError(e: Error): void {
  if (!ApiError.isApiError(e)) {
    throw e;
  }
}
