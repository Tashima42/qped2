<template>
  <div class="true-or-false">
    <div class="body">
      <p>{{ text }}</p>
      <Button @click="verifyAnswer" icon="check" variant="outline" color="grey" text="Verdadeiro" />
      <Button @click="verifyAnswer" icon="x" variant="outline" color="grey" text="Falso" />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "TrueOrFalse",
  components: {
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
      console.log("test")
      console.log(this.text, this.answer)
      //return eval(this.answer)
    },
  },
};
</script>
