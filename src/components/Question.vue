<template>
  <div>
    <Button text="test1" icon="lightning-fill" color="grey" variant="outline" />
    <b-container class="bv-question">
      <b-tabs>
        <b-tab
          v-for="question in questions"
          :key="question.id"
          :title="question.id"
        >
          <b-row>
            <!--
            <b-col>
              <b-row>
                <h2>{{ question.title }}</h2>
              </b-row>
              <b-row>
                <p>{{ question.description }}</p>
              </b-row>
              <b-row>
                <CodeBlock language="c" :code="question.code" />
              </b-row>
            </b-col>
              -->
            <b-col>
              <b-row>
                <component
                  :is="question.type"
                  v-bind:text="question.props.text"
                  v-bind:answer="question.props.answer"
                  v-bind:options="question.props.options"
                />
              </b-row>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import MultipleChoice from "./MultipleChoice.vue";
import TrueOrFalse from "./TrueOrFalse";
import Written from "./Written";
import CodeBlock from "./CodeBlock";
import Button from "./Button";
export default {
  name: "Question",
  components: {
    CodeBlock,
    MultipleChoice,
    TrueOrFalse,
    Written,
    Button,
  },
  props: {
    questions: {
      type: Array
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