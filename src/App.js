import LottoController from './controller/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.play();
  }
}

export default App;
