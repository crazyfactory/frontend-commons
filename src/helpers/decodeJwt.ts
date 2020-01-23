import {decode} from "base-64";

export function decodeJwt(token: string): any {
  // use base64 decode function so that it works on both browser and server
  return JSON.parse(decode(token.split(".")[1]));
}
