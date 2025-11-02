import Lotto from "../src/model/Lotto";
import LottoStore from "../src/model/LottoStore";

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      const lottoStore = new LottoStore();
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottoStore.setWinningLotto(winningLotto.getNumbers());
      lottoStore.setBonusLotto(0);
    }).toThrow("[ERROR]");

    expect(() => {
      const lottoStore = new LottoStore();
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottoStore.setWinningLotto(winningLotto.getNumbers());  
      lottoStore.setBonusLotto(46);
    }).toThrow("[ERROR]");
  });

  test("올바른 보너스 번호가 주어지면 정상적으로 설정된다.", () => {
    const lottoStore = new LottoStore();
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lottoStore.setWinningLotto(winningLotto.getNumbers());
    lottoStore.setBonusLotto(7);
    expect(lottoStore.getBonusLotto()).toBe(7);
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      const lottoStore = new LottoStore();
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottoStore.setWinningLotto(winningLotto.getNumbers());
      lottoStore.setBonusLotto(3);
    }).toThrow("[ERROR]");
  });
    
  test("숫자가 아닌 값이 보너스 번호로 들어오면 예외가 발생한다.", () => {
    expect(() => {
      const lottoStore = new LottoStore();
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottoStore.setWinningLotto(winningLotto.getNumbers());
      lottoStore.setBonusLotto('a');
    }).toThrow("[ERROR]");
  });
});