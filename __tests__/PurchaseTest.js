import Validator from "../src/util/Validator.js";

describe('구매 금액 검증 테스트', () => {
  test('구매 금액이 음수라면 예외가 발생한다.', () => {
    const invalidAmount = -5000;
      expect(() => {
        Validator.validatePurchaseAmount(invalidAmount);
      }).toThrow("[ERROR]");
  });
    
  test('구매 금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
    const invalidAmount = 5500;
    expect(() => {
      Validator.validatePurchaseAmount(invalidAmount);
    }).toThrow("[ERROR]");
  });

  test('구매 금액이 올바르면 예외가 발생하지 않는다.', () => {
    const validAmount = 5000;
      expect(() => {
        Validator.validatePurchaseAmount(validAmount);
      }).not.toThrow();
  });
});
