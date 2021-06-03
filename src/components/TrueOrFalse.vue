<template>
  <div class="true-or-false">
    <div class="body">
      <p>{{ body }}</p>
      <Button icon="check" variant="outline" color="grey" text="Verdadeiro" />
      <Button icon="x" variant="outline" color="grey" text="Falso" />
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
    body: String,
    answer: Boolean,
  },
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    verifyAnswer() {
      console.log(this.answer);
    },
  },
};
</script>
