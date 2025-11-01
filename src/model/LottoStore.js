import Lotto from "./Lotto.js";
import Validator from "../util/Validator.js";

class LottoStore {
    #purchaseAmount;
    #lottoTickets;
    #winningLotto;

    constructor() {
        this.#purchaseAmount = 0;
        this.#lottoTickets = [];
        this.#winningLotto = null;
    }
    
    setPurchaseAmount(amount) {
        this.#purchaseAmount = amount;
    }

    getPurchaseAmount() {
        return this.#purchaseAmount;
    }

    addLottoTickets(tickets) {
        this.#lottoTickets.push(...tickets);
    }

    getLottoTickets() {
        return this.#lottoTickets;
    }

    setWinningLotto(numbers) {
        Validator.validateLottoNumbers(numbers);
        this.#winningLotto = new Lotto(numbers);
    }

    getWinningLotto() {
        return this.#winningLotto;
    }

    
}

export default LottoStore;