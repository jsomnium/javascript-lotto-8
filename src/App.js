import LottoController from './controller/LottoController.js';

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.play();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
