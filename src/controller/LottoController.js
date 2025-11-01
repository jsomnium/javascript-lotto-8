import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoService from "../service/LottoService.js";
import Validator from "../util/Validator.js";

class LottoController {
  #inputView;
  #outputView;
  #LottoService;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#LottoService = new LottoService();
  }

  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
    this.#outputView.printPurchaseAmount(purchaseAmount);

    // const lottoTickets = this.#LottoService.generateLottoTickets(purchaseAmount);
    // this.#outputView.printLotto(lottoTickets);
  }

  async #getPurchaseAmount() {
    const inputString = await this.#inputView.inputPurchaseAmount();
    const parsedNumber = Number(inputString);
    this.#LottoService.validatePurchaseAmount(parsedNumber);
    return parsedNumber;
  }
}

export default LottoController;