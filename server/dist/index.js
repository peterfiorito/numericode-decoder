"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const decoder_1 = __importDefault(require("./helpers/decoder"));
const app = express_1.default();
app.use(morgan_1.default("combined"));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.post("/message", (req, res) => {
    const decoderInstance = new decoder_1.default();
    const decodedMessage = decoderInstance.transformMessage(req.body.message);
    res.status(200).send(decodedMessage);
});
app.listen(process.env.PORT || 8081);
//# sourceMappingURL=index.js.map