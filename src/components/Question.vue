<template>
  <div>
    <component
      v-for="question in questions"
      :key="question.id"
      :is="question.type"
      v-bind:text="question.text"
      v-bind:answer="question.answer"
      v-bind:values="question.values"
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
};
</script>
