import { QuestionParser } from "./QuestionParser"
import { questions } from "./questions"
console.log(QuestionParser)

const parsedQuestions = []

questions.forEach(question => {
  const parser = new QuestionParser(question.text)
  parsedQuestions.push({
    id: question.id,
    text: parser.getText(),
    type: "TrueOrFalse",
    tags: question.tags,
    level: question.level,
    answer: question.answer.toString() 
  })
})

console.log(parsedQuestions)

export default parsedQuestions
