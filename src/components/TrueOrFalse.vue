<template>
  <div class="true-or-false">
    <div class="body">
      <vue-markdown>{{ text }}</vue-markdown>
      <Button
        @click.native="verifyAnswer([10, 20, 30], 10)"
        icon="check"
        variant="outline"
        color="grey"
        text="Verdadeiro"
      />
      <Button
        @click.native="verifyAnswer([10, 20, 30], 10)"
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
    values: Object,
  },
  data() {
    return {
      selected: null,
      correct: null,
    };
  },
  methods: {
    // TODO: add args
    verifyAnswer: function (vet, valor) {
      //console.log(this.values);
      this.correct = eval(`(${this.answer})(${vet}, ${valor}, 50)`);
    },
  },
};
</script>
