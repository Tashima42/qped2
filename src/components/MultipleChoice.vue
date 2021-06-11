<template>
  <div class="multiple-choice">
    <div class="body">
      <p>{{ body }}</p>
      <Button
        v-for="(option, index) in options"
        :key="index"
        icon="x"
        variant="outline"
        color="grey"
        :text="option"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "MultipleChoice",
  components: {
    Button,
  },
  props: {
    body: String,
    options: Array,
    answer: String,
  },
  data() {
    return {
      selected: undefined,
      alert: {
        variant: "danger",
        message: "Errado",
        show: false,
      },
    };
  },
  methods: {
    verifyAnswer() {
      console.log(this.selected, this.answer);
      console.log(this.options);
      console.log(this.selected == this.answer);
      if (this.selected == this.answer) {
        alert.variant = "success";
        alert.message = "Correto";
      }
      alert.show = true;
    },
  },
};
</script>
