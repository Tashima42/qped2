export const questions = [
  {
    id: 'busca-seq-1',
    text:
      `# Teste
  Suponha que você está realizando uma busca sequencial no vetor: 
  \`[{vet=3:13:+{6:11}}]\`

Quantas comparações serão realizadas se o valor buscado for \`{valor=3:13}\`?`,
    answer: function ({ vet, valor, userInput }) {
      for (let i = 0; i < vet.length; i++) {
        if (
          vet[i] == valor &&
          i + 1 == userInput
        ) {
          return true;
        }
      }
      return false
    },
    subject: 'busca',
    level: 1, //1 para facil, 2 para medio, 3 para dificil
    tags: ['busca binária', 'busca', 'conceito'],
    type: "Written"
  },

  {
    id: 'pilha-simulacao-1',
    text:
      `Se a seguinte sequência de operações é realizada com uma pilha: 
  \`{operacoes}\`

Em qual ordem os elementos serão removidos da pilha?
<operacoes>
  <op value="1101100010">push({a=1:5}), push({b=1:5}), pop(), push({c=1:5}), push({d=1:5}), pop(), pop(), pop(), push({e=1:5}), pop()</op>
  <op value="1100110100">push({a=1:5}), push({b=1:5}), pop(), pop(), push({c=1:5}), push({d=1:5}), pop(), push({e=1:5}), pop(), pop()</op>
  <op value="1110010100">push({a=1:5}), push({b=1:5}), push({c=1:5}), pop(), pop(), push({d=1:5}), pop(), push({e=1:5}), pop(), pop()</op>
  <op value="1011011000">push({a=1:5}), pop(), push({b=1:5}), push({c=1:5}), pop(), push({d=1:5}), push({e=1:5}), pop(), pop(), pop()</op>
  <op value="1010110100">push({a=1:5}), pop(), push({b=1:5}), pop(), push({c=1:5}), push({d=1:5}), pop(), push({e=1:5}), pop(), pop()</op>
</operacoes>`,
    answer: function ({ operacoes, a, b, c, d, e }) {
      let ops = operacoes.split('');
      let values = [e, d, c, b, a];
      let stack = [];
      let resp = [];
      for (let i = 0; i < ops.length; i++) {
        if (ops[i] == '1') {
          stack.push(values.pop());
        } else {
          resp.push(stack.pop());
        }
      }
      console.log(resp)
      return resp;
    },
    subject: 'pilha',
    level: 1,
    tags: ['pilha', 'pilha funcionamento', 'push', 'pop'],
    type: "Written"
  }
];
