export const InputMessage = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
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
  INVALID_PURCHASE_AMOUNT_MULTIPLE: '구매 금액은 1000원의 배수여야 합니다.',
});

export const ResultMessage = Object.freeze({
  PURCHASED_LOTTO_COUNT: (count) => `${count}개를 구매했습니다.`,
});