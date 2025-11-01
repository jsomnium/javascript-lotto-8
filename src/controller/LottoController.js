import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoService from "../service/LottoService.js";

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
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
  }
}

export default LottoController;