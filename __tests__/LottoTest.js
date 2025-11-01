import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("올바른 로또 번호가 주어지면 정상적으로 생성된다.", () => {
    const lotto = new Lotto([5, 12, 23, 34, 41, 45]);
    expect(lotto.numbers).toEqual([5, 12, 23, 34, 41, 45]);
  });

  // 로또 번호에 숫자가 아닌 값이 들어오면 에러
  test("로또 번호에 숫자가 아닌 값이 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 6]);
    }).toThrow("[ERROR]");
  });
});
