<template>
  <div class="true-or-false">
    <div class="body">
      <p>{{ body }}</p>
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="verdadeiro"
          value="true"
          v-model="selected"
          >Verdadeiro</b-form-radio
        >
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="falso"
          value="false"
          v-model="selected"
          >Falso</b-form-radio
        >
      </b-form-group>
      <b-button variant="outline-primary">VERIFICAR RESPOSTA</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrueOrFalse",
  props: {
    body: String,
    answer: Boolean,
  },
  data() {
    return {
      selected: undefined,
    };
  },
};
</script>
