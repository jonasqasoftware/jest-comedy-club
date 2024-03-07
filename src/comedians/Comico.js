const Comedian = require('./Comedian');

class Comico extends Comedian {
  perform() {
    return "Rindo alto com piadas engraçadíssimas!";
  }
}

module.exports = Comico;
