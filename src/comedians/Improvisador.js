const Comedian = require('./Comedian');

class Improvisador extends Comedian {
  perform() {
    return "Lidando com as situações mais inusitadas do público!";
  }
}

module.exports = Improvisador;
