import { ErrorMessage } from "../constant/index.js";

class CustomError extends Error {
  constructor(message) {
    super(`${ErrorMessage.PREFIX_ERROR} ${message}`);
    this.name = 'CustomError';
  }
}

export default CustomError;