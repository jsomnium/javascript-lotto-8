import Lotto from "../model/Lotto";
import Validator from "../util/Validator";

class LottoService {
  #LottoCount;
  #LottoNumbers;
    
  constructor(lottoCount = 0) {
    this.#LottoCount = lottoCount;
    this.#LottoNumbers = [];
  }

  validatePurchaseAmount(purchaseAmount) {
    Validator.validatePurchaseAmount(purchaseAmount);
  }
}

export default LottoService;