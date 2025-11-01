import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class InputView {
  async inputPurchaseAmount() {
    const inputString = await Console.readLineAsync(Message.PURCHASE_AMOUNT_PROMPT);
    return inputString;
  }

  async inputWinningNumbers() {
    const inputString = await Console.readLineAsync(Message.WINNING_NUMBERS_PROMPT);
    return inputString;
  }

  async inputBonusNumber() {
    const inputString = await Console.readLineAsync(Message.BONUS_NUMBER_PROMPT);
    return inputString;
  }
}

export default InputView;