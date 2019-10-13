class Decoder {
  public transformMessage(message: string) {
    const isvalid = /^(\s*[0-9]+\s*)+$/.test(message);
    if (!isvalid) {
      return "Not a valid input";
    }
    return message.split(" ")
      .map((x) => {
        while (Number(x) >= 27) {
          if ((Number(x) % 27) === 0) {
            x = String((Number(x) / 27));
          } else {
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

export default Decoder;
