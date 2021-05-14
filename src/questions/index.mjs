import { QuestionParser } from "../utils/parser.mjs"

const questions = [
  {
    type: "TrueOrFalse",
    title: "Queue",
    description: "Question",
    subject: "queue",
    level: "easy",
    tags: ["data-structure", "queue"],
    props: {
      body: `Resolve esse array: [{1=0:100:10}]`,
      answer: true,
    }
  },
  {
    type: "MultipleChoice",
    title: "Stack",
    description: "Question 2",
    subject: "stack",
    level: "medium",
    tags: ["data-structure", "stack"],
    props: {
      body: `Resolve esse array: [{1=0:100:10}]`,
      options: [],
      answer: "b",
    }
  },
  {
    type: "Written",
    title: "Queue",
    description: "Solve this question",
    subject: "queue",
    level: "hard",
    tags: ["data-structure", "queue"],
    props: {
      body: `int main() { 
              return {answer=10:20} 
             }`,
      answer: "",
    },
  },
]

const parsedQuestions = []

questions.forEach(question => {
  const parser = new QuestionParser(question.props.body)
  question.props.body = parser.getText()
  if (question.type === "MultipleChoice") {
    //question.options = parser.getOptions() // TODO: implement
  }
  if (question.type === "Written") {
    question.props.answer = parser.getValue("answer")
  }
  parsedQuestions.push(question)
})

console.log(parsedQuestions)
