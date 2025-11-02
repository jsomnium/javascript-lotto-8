import LottoService from "../src/service/LottoService.js";
import Validator from "../src/util/Validator.js";

describe("보너스 번호 테스트", () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  describe("LottoService의 parseBonusNumber 테스트", () => {
    test("올바른 보너스 번호 문자열을 숫자로 파싱한다.", () => {
      expect(lottoService.parseBonusNumber("7")).toBe(7);
      expect(lottoService.parseBonusNumber("15")).toBe(15);
      expect(lottoService.parseBonusNumber("45")).toBe(45);
    });

    test("공백이 포함된 보너스 번호도 올바르게 파싱한다.", () => {
      expect(lottoService.parseBonusNumber(" 7 ")).toBe(7);
      expect(lottoService.parseBonusNumber("  15  ")).toBe(15);
    });

    test("보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
      expect(() => {
        lottoService.parseBonusNumber("0");
      }).toThrow("[ERROR]");

      expect(() => {
        lottoService.parseBonusNumber("46");
      }).toThrow("[ERROR]");

      expect(() => {
        lottoService.parseBonusNumber("-1");
      }).toThrow("[ERROR]");
    });

    test("숫자가 아닌 값이 보너스 번호로 들어오면 예외가 발생한다.", () => {
      expect(() => {
        lottoService.parseBonusNumber("a");
      }).toThrow("[ERROR]");

      expect(() => {
        lottoService.parseBonusNumber("abc");
      }).toThrow("[ERROR]");

      expect(() => {
        lottoService.parseBonusNumber("");
      }).toThrow("[ERROR]");
    });

    test("소수점이 포함된 숫자는 예외가 발생한다.", () => {
      expect(() => {
        lottoService.parseBonusNumber("7.5");
      }).toThrow("[ERROR]");

      expect(() => {
        lottoService.parseBonusNumber("15.7");
      }).toThrow("[ERROR]");
    });
  });

  describe("Validator의 validateSingleNumber 테스트", () => {
    test("올바른 범위의 숫자는 예외가 발생하지 않는다.", () => {
      expect(() => {
        Validator.validateSingleNumber(1);
      }).not.toThrow();

      expect(() => {
        Validator.validateSingleNumber(22);
      }).not.toThrow();

      expect(() => {
        Validator.validateSingleNumber(45);
      }).not.toThrow();
    });

    test("범위를 벗어나는 숫자는 예외가 발생한다.", () => {
      expect(() => {
        Validator.validateSingleNumber(0);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateSingleNumber(46);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateSingleNumber(-5);
      }).toThrow("[ERROR]");
    });

    test("정수가 아닌 값은 예외가 발생한다.", () => {
      expect(() => {
        Validator.validateSingleNumber(7.5);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateSingleNumber(NaN);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateSingleNumber(null);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateSingleNumber(undefined);
      }).toThrow("[ERROR]");
    });
  });

  describe("Validator의 validateBonusNumber 테스트", () => {
    test("당첨 번호와 중복되지 않는 보너스 번호는 정상 처리된다.", () => {
      const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
      
      expect(() => {
        Validator.validateBonusNumber(7, winningNumbers);
      }).not.toThrow();

      expect(() => {
        Validator.validateBonusNumber(45, winningNumbers);
      }).not.toThrow();
    });

    test("당첨 번호와 중복되는 보너스 번호는 예외가 발생한다.", () => {
      const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
      
      expect(() => {
        Validator.validateBonusNumber(1, winningNumbers);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateBonusNumber(3, winningNumbers);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateBonusNumber(6, winningNumbers);
      }).toThrow("[ERROR]");
    });

    test("보너스 번호가 범위를 벗어나면 예외가 발생한다.", () => {
      const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
      
      expect(() => {
        Validator.validateBonusNumber(0, winningNumbers);
      }).toThrow("[ERROR]");

      expect(() => {
        Validator.validateBonusNumber(46, winningNumbers);
      }).toThrow("[ERROR]");
    });
  });
});