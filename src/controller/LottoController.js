import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoService from "../service/LottoService.js";
import LottoStore from "../model/LottoStore.js";

class LottoController {
  #inputView;
  #outputView;
  #LottoService;
  #LottoStore;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#LottoService = new LottoService();
    this.#LottoStore = new LottoStore();
  }

  async play() {
    // 발행한 로또 수량 출력
    const purchaseAmount = await this.#getPurchaseAmount();
    const purchaseCount = this.#LottoService.calculatePurchaseCount(purchaseAmount);
    this.#outputView.printPurchaseCount(purchaseCount);
    
    // 발행한 로또 번호 출력
    const lottoTickets = this.#LottoService.generateLottoTickets(purchaseCount);
    this.#LottoStore.addLottoTickets(lottoTickets);
    this.#outputView.printLotto(this.#LottoStore.getLottoTickets());

    // 당첨 번호 입력
    const winningNumbers = await this.#getWinningNumbers();
    this.#LottoStore.setWinningLotto(winningNumbers);

    // 보너스 번호 입력
    const bonusNumber = await this.#getBonusNumber();
    this.#LottoStore.setBonusLotto(bonusNumber);

    // 당첨 결과 출력
    this.#LottoStore.calculateResult();
    this.#outputView.printWinningResult(this.#LottoStore.getWinningResult());
    this.#outputView.printWinningRate(this.#LottoStore.getWinningRate());
  }

  async #getPurchaseAmount() {
    return await this.#retryOnError(async () => {
      const inputString = await this.#inputView.inputPurchaseAmount();
      const parsedNumber = Number(inputString);
      this.#LottoService.validatePurchaseAmount(parsedNumber);
      this.#LottoStore.setPurchaseAmount(parsedNumber);
      return parsedNumber;
    });
  }

  async #getWinningNumbers() {
    return await this.#retryOnError(async () => {
      const winningNumbersInput = await this.#inputView.inputWinningNumbers();
      const winningNumbers = this.#LottoService.parseWinningNumbers(winningNumbersInput);
      return winningNumbers;
    });
  }

  async #getBonusNumber() {
    return await this.#retryOnError(async () => {
      const bonusNumberInput = await this.#inputView.inputBonusNumber();
      const bonusNumber = this.#LottoService.parseBonusNumber(bonusNumberInput);
      return bonusNumber;
    });
  }

  async #retryOnError(asyncFunction) {
    while (true) {
      try {
        return await asyncFunction();
      } catch (error) {
        this.#outputView.printErrorMessage(error);
      }
    }
  }
}

export default LottoController;