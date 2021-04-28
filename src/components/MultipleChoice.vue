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
      <b-button variant="outline-primary">VERIFICAR RESPOSTA</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleChoice",
  props: {
    body: String,
    options: Array,
  },
  data() {
    return {
      selected: undefined,
    };
  },
};
</script>
