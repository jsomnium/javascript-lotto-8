import { Console } from '@woowacourse/mission-utils';
import { InputMessage } from '../constant/index.js';

class InputView {
  async inputPurchaseAmount() {
    const inputString = await Console.readLineAsync(InputMessage.INPUT_PURCHASE_AMOUNT);
    return inputString;
  }

  async inputWinningNumbers() {
    const inputString = await Console.readLineAsync(InputMessage.INPUT_WINNING_NUMBERS);
    return inputString;
  }

  async inputBonusNumber() {
    const inputString = await Console.readLineAsync(InputMessage.INPUT_BONUS_NUMBER);
    return inputString;
  }
}

export default InputView;