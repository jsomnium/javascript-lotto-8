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
    const winningNumbersInput = await this.#inputView.inputWinningNumbers();
    const winningNumbers = this.#LottoService.parseWinningNumbers(winningNumbersInput);
    this.#LottoStore.setWinningLotto(winningNumbers);

    // 보너스 번호 입력

    // 당첨 결과 출력

    // 수익률 계산 및 출력
  }

  async #getPurchaseAmount() {
    const inputString = await this.#inputView.inputPurchaseAmount();
    const parsedNumber = Number(inputString);
    this.#LottoService.validatePurchaseAmount(parsedNumber);
    return parsedNumber;
  }
}

export default LottoController;