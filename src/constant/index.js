export const Message = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
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
  INVALID_LOTTO_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBERS_DUPLICATE: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  INVALID_LOTTO_NUMBER_TYPE: '[ERROR] 로또 번호는 정수여야 합니다.',
  INVALID_LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구매 금액은 양의 정수여야 합니다.',
});