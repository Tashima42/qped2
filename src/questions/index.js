import { QuestionParser } from "./QuestionParser"
import { questions } from "./questions"

const parsedQuestions = []

questions.forEach(question => {
  const parser = new QuestionParser(question.text)
  parsedQuestions.push({
    id: question.id,
    text: parser.getText(),
    type: question.type,
    tags: question.tags,
    level: question.level,
    answer: question.answer.toString() 
  })
})

export default parsedQuestions
