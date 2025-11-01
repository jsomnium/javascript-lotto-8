import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoService from "../service/LottoService.js";
import Validator from "../util/Validator.js";

class LottoController {
  #inputView;
  #outputView;
  #LottoService;
  #Validator;
    
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#LottoService = new LottoService();
    this.#Validator = new Validator();
  }

  async play() {
    const purchaseAmount = await this.#inputView.inputPurchaseAmount();
    this.#Validator.validatePurchaseAmount(purchaseAmount);
  }
}

export default LottoController;