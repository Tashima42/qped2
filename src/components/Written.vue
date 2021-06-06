<template>
  <div class="written">
    <div class="body">
      <b-alert variant="success" v-model="showCorrectAlert" dismissible
        >Correto!</b-alert
      >
      <b-alert variant="danger" v-model="showWrongAlert" dismissible
        >Errado!</b-alert
      >
      <vue-markdown>{{ text }}</vue-markdown>
      <b-container>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-input
              v-model="userInput"
              placeholder="Resposta..."
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3" offset-md="5">
            <Button
              @click.native="verifyAnswer()"
              variant="filled"
              color="dark-grey"
              text="Responder"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import VueMarkdown from "vue-markdown-v2";
export default {
  name: "Written",
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
      userInput: null,
      correct: null,
      showCorrectAlert: false,
      showWrongAlert: false,
    };
  },
  methods: {
    verifyAnswer: function () {
      const userInput = this.parseUserInput(this.userInput);
      this.correct = eval(
        `(${this.answer})({ userInput: ${userInput}, ${this.removeCurlyBrackets(
          JSON.stringify(this.values)
        )}})`
      );
      if (this.correct === true) {
        this.showCorrectAlert = true;
        this.showWrongAlert = false;
      } else {
        this.showCorrectAlert = false;
        this.showWrongAlert = true;
      }
    },
    parseUserInput(userInput) {
      return typeof userInput === "string" ? `"${userInput}"` : userInput;
    },
    removeCurlyBrackets(string) {
      return string.replace("{", "").replace("}", "");
    },
  },
};
</script>
