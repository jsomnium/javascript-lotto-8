import Lotto from "../src/model/Lotto.js";

describe("로또 관련 계층별 테스트", () => {
  describe("Lotto 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([0, 2, 3, 4, 5, 6]);
      }).toThrow("[ERROR]");

      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 숫자가 아닌 값이 들어오면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 'a', 6]);
      }).toThrow("[ERROR]");
    });

    test("올바른 로또 번호가 주어지면 정상적으로 생성된다.", () => {
      const lotto = new Lotto([5, 12, 23, 34, 41, 45]);
      expect(lotto.getNumbers()).toEqual([5, 12, 23, 34, 41, 45]);
    });

    test("getNumbers는 정렬된 배열을 반환한다.", () => {
      const lotto = new Lotto([45, 1, 23, 5, 34, 12]);
      expect(lotto.getNumbers()).toEqual([1, 5, 12, 23, 34, 45]);
    });

    test("getNumbersSet은 Set 객체를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const numbersSet = lotto.getNumbersSet();
      
      expect(numbersSet).toBeInstanceOf(Set);
      expect(numbersSet.size).toBe(6);
      expect(numbersSet.has(1)).toBe(true);
      expect(numbersSet.has(7)).toBe(false);
    });

    test("hasNumber는 특정 번호 포함 여부를 확인한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      expect(lotto.hasNumber(1)).toBe(true);
      expect(lotto.hasNumber(6)).toBe(true);
      expect(lotto.hasNumber(7)).toBe(false);
      expect(lotto.hasNumber(45)).toBe(false);
    });

    test("countMatchingNumbers는 일치하는 번호 개수를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      expect(lotto.countMatchingNumbers([1, 2, 3, 7, 8, 9])).toBe(3);
      expect(lotto.countMatchingNumbers([1, 2, 3, 4, 5, 6])).toBe(6);
      expect(lotto.countMatchingNumbers([7, 8, 9, 10, 11, 12])).toBe(0);
      expect(lotto.countMatchingNumbers([1])).toBe(1);
    });
  });
});
