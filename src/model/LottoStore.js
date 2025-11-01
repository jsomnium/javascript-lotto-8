import Lotto from "./Lotto.js";

class LottoStore {
    #purchaseAmount;
    #lottoTickets;

    constructor() {
        this.#purchaseAmount = 0;
        this.#lottoTickets = [];
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
}

export default LottoStore;