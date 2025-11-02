import LottoStore from "../src/model/LottoStore.js";
import Lotto from "../src/model/Lotto.js";

describe("당첨 통계 출력 테스트", () => {
  test("당첨 통계가 올바르게 계산되는지 확인한다.", () => {
    const lottoStore = new LottoStore();
    lottoStore.setWinningLotto([1, 2, 3, 4, 5, 6]);
    lottoStore.setBonusLotto(7);
  });
});