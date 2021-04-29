<template>
  <div class="header">
    <b-tabs content-class="mt-3">
      <b-tab
        v-for="question in questions"
        :key="question.id"
        :title="question.level"
      >
        <h2>{{ question.title }}</h2>
        <p>{{ question.description }}</p>
        <component
          :is="question.type"
          v-bind:body="question.props.body"
          v-bind:options="question.props.options"
        />
      </b-tab>
    </b-tabs>
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
  /*
  props: {
    questions: [
      {
        id: Number,
        type: String,
        title: String,
        description: String,
        subject: String,
        level: String,
        tags: Array,
        props: Object,
        methods: Object,
      },
    ],
  },
  */
  data() {
    return {
      questions: [
        {
          id: 1,
          type: "TrueOrFalse",
          title: "Queue",
          description: "Solve this question",
          subject: "queue",
          level: "easy",
          tags: ["data-structure", "queue"],
          props: {
            body: "this is a queue: [1, 2, 3, 4, 5]",
            answer: true,
          },
        },
        {
          id: 2,
          type: "MultipleChoice",
          title: "Stack",
          description: "Solve this question",
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
};
</script>

<style>
</style>