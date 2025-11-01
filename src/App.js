import LottoController from './controller/LottoController.js';

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.play();
    } catch (error) {
      // 에러 처리 로직 추가 예정
    }
  }
}

export default App;
