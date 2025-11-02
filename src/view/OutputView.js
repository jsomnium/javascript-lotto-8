import { Console } from '@woowacourse/mission-utils';
import { ResultMessage } from '../constant/index.js';
import { LottoRank } from '../constant/index.js'

class OutputView {
  printPurchaseCount(count) {
    Console.print(ResultMessage.PURCHASED_LOTTO_COUNT(count));
  }

  printLotto(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      const numbers = Array.from(ticket.getNumbers()).sort((a, b) => a - b);
      Console.print(`[${numbers.join(', ')}]`);
    });
    Console.print('\n');
  }

  printError(error) {
    Console.print(error.message);
  }

  printWinningResult(winningResult) {
    Console.print(ResultMessage.WINNING_COMMENT);
  
    const ranks = [LottoRank.FIFTH, LottoRank.FOURTH, LottoRank.THIRD, LottoRank.SECOND, LottoRank.FIRST];
    
    ranks.forEach(rank => {
      const count = winningResult.get(rank);
      const hasBonus = rank.hasBonus || false;
      Console.print(ResultMessage.WINNING_RESULT(rank.matchCount, rank.prize, count, hasBonus));
    });
  }

  printWinningRate(winningRate) {
    Console.print(ResultMessage.RETURN_RATE(winningRate));
  }
}

export default OutputView;