import { LottoConstants } from "../constant/index.js";

const Validator = {
// 로또 번호 배열이 유효한지 검사
    validateLottoNumbers(numbers) {
        const { LENGTH, MIN_NUMBER, MAX_NUMBER } = LottoConstants;

        // 개수 검사
        if (numbers.length !== LENGTH) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }

        // 중복 검사
        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== numbers.length) {
            throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
        }

        // 범위 및 타입 검사
        for (const number of numbers) {
            if (typeof number !== 'number' || !Number.isInteger(number)) {
                throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
            }
            if (number < MIN_NUMBER || number > MAX_NUMBER) {
                throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
            }
        }
    }
};

export default Validator;