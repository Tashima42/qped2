<template>
  <div class="true-or-false">
    <div class="body">
      <vue-markdown>{{ text }}</vue-markdown>
      <Button
        v-on:click.native="verifyAnswer"
        icon="check"
        variant="outline"
        color="grey"
        text="Verdadeiro"
      />
      <Button
        @click="verifyAnswer"
        icon="x"
        variant="outline"
        color="grey"
        text="Falso"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import VueMarkdown from "vue-markdown-v2";
export default {
  name: "TrueOrFalse",
  components: {
    VueMarkdown,
    Button,
  },
  props: {
    text: String,
    answer: String,
  },
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    // TODO: add args
    verifyAnswer: function () {
      return eval(`(${this.answer})()`);
    },
  },
};
</script>
