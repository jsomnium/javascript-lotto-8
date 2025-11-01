import { Console } from '@woowacourse/mission-utils';
import { ResultMessage } from '../constant/index.js';

class OutputView {
  printPurchaseCount(count) {
    Console.print(ResultMessage.PURCHASED_LOTTO_COUNT(count));
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