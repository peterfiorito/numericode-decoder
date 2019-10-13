import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import Decoder from "./helpers/decoder";

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.post("/message", (req, res) => {
  const decoderInstance = new Decoder();
  const decodedMessage = decoderInstance.transformMessage(req.body.message);
  res.status(200).send(decodedMessage);
});

app.listen(process.env.PORT || 8081);
