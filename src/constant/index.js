export const InputMessage = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const LottoConstants = Object.freeze({
  LENGTH: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
});

export const ErrorMessage = Object.freeze({
  PREFIX_ERROR: '[ERROR]',
  INVALID_LOTTO_NUMBERS_LENGTH: '로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBERS_DUPLICATE: '로또 번호에 중복된 숫자가 있습니다.',
  INVALID_LOTTO_NUMBER_TYPE: '로또 번호는 양의 정수여야 합니다.',
  INVALID_LOTTO_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_PURCHASE_AMOUNT_TYPE: '구매 금액은 양의 정수여야 합니다.',
  INVALID_PURCHASE_AMOUNT_MULTIPLE: '구매 금액은 1,000원의 배수여야 합니다.',
  INVALID_RESULT_CALCULATION: '로또 결과를 계산할 수 없습니다.\n로또 당첨 번호 등을 올바르게 입력해주세요.',
});

export const ResultMessage = Object.freeze({
  PURCHASED_LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_COMMENT: '\n당첨 통계\n---',
  WINNING_RESULT: (matchCount, amount, winningCount, hasBonus = false) => {
    const formattedAmount = Number(amount).toLocaleString();
    if (hasBonus) {
      return `${matchCount}개 일치, 보너스 볼 일치 (${formattedAmount}원) - ${winningCount}개`;
    }
    return `${matchCount}개 일치 (${formattedAmount}원) - ${winningCount}개`;
  },
  RETURN_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const LottoRank = Object.freeze({
  FIRST: { matchCount: 6, prize: 2000000000 },
  SECOND: { matchCount: 5, prize: 30000000, hasBonus: true },
  THIRD: { matchCount: 5, prize: 1500000 },
  FOURTH: { matchCount: 4, prize: 50000 },
  FIFTH: { matchCount: 3, prize: 5000 },
});