class Comedian {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Olá, eu sou ${this.name}!`;
  }

  perform() {
    throw new Error("Método perform() deve ser implementado por subclasses.");
  }
}

module.exports = Comedian;
