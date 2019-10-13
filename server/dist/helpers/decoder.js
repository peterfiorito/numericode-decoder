"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Decoder {
    transformMessage(message) {
        const isvalid = /^(\s*[0-9]+\s*)+$/.test(message);
        if (!isvalid) {
            return "Not a valid input";
        }
        return message.split(" ")
            .map((x) => {
            while (Number(x) >= 27) {
                if ((Number(x) % 27) === 0) {
                    x = String((Number(x) / 27));
                }
                else {
                    x = " ";
                }
            }
            return x;
        })
            .map((y) => {
            if (y !== " ") {
                y = String.fromCharCode(96 + Number(y));
            }
            return y;
        })
            .join("");
    }
}
exports.default = Decoder;
//# sourceMappingURL=decoder.js.map