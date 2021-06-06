<template>
  <div>
    <component
      v-for="question in questions"
      :key="question.id"
      :is="question.type"
      v-bind:text="question.text"
      v-bind:answer="question.answer"
      v-bind:options="question.options"
    />
  </div>
</template>

<script>
import MultipleChoice from "./MultipleChoice.vue";
import TrueOrFalse from "./TrueOrFalse";
import Written from "./Written";
export default {
  name: "Question",
  components: {
    MultipleChoice,
    TrueOrFalse,
    Written,
  },
  props: {
    questions: {
      type: Array,
    },
  },
  /*
  data() {
    return {
      questions: [
        {
          id: 1,
          type: "TrueOrFalse",
          code: `
            int main() {
              int queue[5] = { 1, 2, 3, 4, 5};
              return 0;
            }
          `,
          subject: "queue",
          level: "easy",
          tags: ["data-structure", "queue"],
          props: {
            text: "this is a queue: [1, 2, 3, 4, 5]",
            answer: true,
          },
        },
        {
          id: 2,
          type: "MultipleChoice",
          title: "Stack",
          description: "Solve this question", code: `
            int main() {
              int queue[5] = { 1, 2, 3, 4, 5};
              return 0;
            }
          `,
          subject: "stack",
          level: "medium",
          tags: ["data-structure", "stack"],
          props: {
            body: "this is a stack: [1, 2, 3, 4, 5]",
            options: ["a", "b", "c"],
            answer: "b",
          },
        },
        {
          id: 3,
          type: "Written",
          title: "Queue",
          description: "Solve this question",
          code: `
            int main() {
              int queue[5] = { 1, 2, 3, 4, 5};
              return 0;
            }
          `,
          subject: "queue",
          level: "hard",
          tags: ["data-structure", "queue"],
          props: {
            body: "int main() { return true }",
            answer: "true",
          },
        },
      ],
    };
  },
    */
};
</script>

<style>
.code {
  length: 100px;
}
</style>