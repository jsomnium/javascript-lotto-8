import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class OutputView {
  printPurchaseAmount(amount) {
    Console.print(`${amount}원 구매 완료되었습니다.\n`);
  }

  printLotto(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(', ')}]`);
    });
    Console.print('\n');
  }

  printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;