<template>
  <div class="multiple-choice">
    <div class="body">
      <p>{{ body }}</p>
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-for="(option, index) in options"
          :key="index"
          :aria-describedby="ariaDescribedby"
          :name="option"
          :value="option"
          v-model="selected"
          >{{ option }}</b-form-radio
        >
      </b-form-group>
      <b-button @click="verifyAnswer" variant="outline-primary"
        >VERIFICAR RESPOSTA</b-button
      >
      <b-alert :variant="alert.variant" v-model="alert.show">{{
        alert.message
      }}</b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleChoice",
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
