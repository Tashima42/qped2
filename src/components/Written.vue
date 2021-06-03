<template>
  <div class="written">
    <div class="body">
      <p>{{ body }}</p>
      <b-container>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-input
              v-model="userInput"
              placeholder="Resposta..."
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <Button variant="filled" color="dark-grey" text="Responder" />
    </div>
  </div>
</template>

<script>
import Button from "./Button"
export default {
  name: "Written",
  components: {
    Button,
  },
  props: {
    body: String,
    answer: String,
  },
  data() {
    return {
      userInput: undefined,
    };
  },
  methods: {
    verifyAnswer: function () {
      console.log(this.answer);
    },
  },
};
</script>
