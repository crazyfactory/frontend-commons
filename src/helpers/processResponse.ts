import {ApiError} from "../models/ApiError";

export async function processResponse(response: Response): Promise<any> {
  if (response.ok) {
    const text = await response.text();
    // 204 No-Content: return void
    if (text.length === 0) {
      return;
    }
    return JSON.parse(text);
  } else {
    const text = await response.text();
    if (text.length) {
      throw new ApiError(text, response.status);
    }
    throw new ApiError("Something went wrong.", 500);
  }
}
