import { Message } from "../constant";

class CustomError extends Error {
  constructor(message) {
    super(`${Message.PREFIX_ERROR} ${message}`);
    this.name = 'CustomError';
  }
}

export default CustomError;