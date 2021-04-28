<template>
  <div id="app">
    <Question v-bind="multiple" />
  </div>
</template>

<script>
import Question from "./components/Question";
export default {
  components: {
    Question,
  },
  data() {
    return {
      multiple: [
        {
          id: 1,
          type: "MultipleChoice",
          title: "Multiple Choice",
          description: "Solve this question",
          subject: "stack",
          level: "medium",
          tags: ["data-structure", "stack"],
          props: {
            test: "test",
            test2: "test2",
          },
          methods: {
            verify() {
              return true;
            },
          },
        },
      ],
    };
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
