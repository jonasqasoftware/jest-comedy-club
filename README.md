# jest-comedy-club

Olá, curiosos do humor e testadores incansáveis! Bem-vindos ao Jest Comedy Club, onde o código é engraçado e os testes são as piadas!

## Sobre o Projeto

O Jest Comedy Club é um programa de treinamento inovador que combina o poder do humor com o mundo dos testes unitários em JavaScript. Neste clube virtual, cada comediante (função) tem seus próprios truques (métodos), e os aprendizes são desafiados a criar testes unitários que garantam gargalhadas de qualidade.

## Estrutura do Projeto

Aqui está um breve tour pelo backstage do Jest Comedy Club:

```
jest-comedy-club/
├── src/
│   ├── comedians/
│   │   ├── Comedian.js
│   │   ├── Comico.js
│   │   ├── Improvisador.js
│   │   └── ...
│   └── tests/
│       ├── Comico.test.js
│       ├── Improvisador.test.js
│       └── ...
├── .gitignore
├── package.json
└── README.md
```

- **src/comedians:** Classes dos comediantes e suas implementações.
- **src/tests:** Testes unitários que garantem que a comédia seja afiada.

## Como Contribuir

### Passo 1: Clonando o Repositório

Clone o repositório para sua máquina local e entre na vibe humorística:

```bash
git clone https://github.com/seu-usuario/jest-comedy-club.git
cd jest-comedy-club
```

### Passo 2: Configuração do Ambiente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências:

```bash
npm install
```

### Passo 3: Adicionando um Novo Comediante

Quer adicionar um novo comediante ao clube? Siga este exemplo:

1. Crie um novo arquivo na pasta `src/comedians` para a nova classe do comediante.
2. Implemente a classe, estendendo a classe base `Comedian`.
3. Escreva testes para o novo comediante em `src/tests`.

### Passo 4: Sessões de "Open-Mic"

Participe das sessões de "open-mic" compartilhando suas contribuições. Execute os testes com:

```bash
npm test
```

E apresente seus testes e implementações com entusiasmo!

### .gitignore

Certifique-se de não incluir arquivos desnecessários no repositório. Utilizamos um `.gitignore` robusto. Verifique se você não está comprometendo seu histórico de piadas internas:

```gitignore
node_modules/
```

## Próximos Desafios

- Adicione mais comediantes e testes engraçados.
- Explore a criação de mocks e spies para simular situações hilariantes.
- Participe de sessões de "open-mic" para aprimorar seu senso de humor e habilidades de teste.

**Lembre-se, o humor é subjetivo, mas testes de qualidade são universais! Divirta-se aprendendo no Jest Comedy Club!** 🎉
