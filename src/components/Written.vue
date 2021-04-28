<template>
  <div class="written">
    <div class="body">
      <p>{{ body }}</p>
      <b-form-input
        v-model="userInput"
        placeholder="Resposta..."
      ></b-form-input>
      <b-button variant="outline-primary">VERIFICAR RESPOSTA</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Written",
  props: {
    body: String,
    answer: String,
  },
  data() {
    return {
      userInput: undefined,
    };
  },
};
</script>
