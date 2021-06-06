<template>
  <div id="app">
    <Question :questions="questions" />
  </div>
</template>

<script>
//import questions from "./questions/index"
import Question from "./components/Question";
export default {
  components: {
    Question,
  },
  computed: {
    questions: () => {
      return [
        {
          id: "busca-seq-1",
          type: "TrueOrFalse",
          subject: "queue",
          level: 1,
          tags: ["data-structure", "queue"],
          props: {
            text: "this is a queue: [1, 2, 3, 4, 5]",
            answer: function (vet, valor) {
              for (let i = 0; i < vet.length; i++) {
                if (vet[i] == valor) return i + 1;
              }
              return vet.length;
            }.toString(),
          },
        },
      ];
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
