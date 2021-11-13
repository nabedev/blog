import { mkdirSync, writeFileSync } from "fs"
import slugify from "slugify"
import { prompt, QuestionCollection } from "inquirer"

const questions: QuestionCollection = [
  {
    type: "input",
    name: "title",
    message: "title in japanese?",
  },
  {
    type: "input",
    name: "slug",
    message: "title in english (this will be slug)?",
  },
]

;(async () => {
  const { title, slug } = await prompt(questions)
  const dirpath = `./blog/${slugify(slug)}`
  mkdirSync(dirpath)

  const frontmatter = `
  ---
  title: ${title}
  ---
  `
  writeFileSync(`${dirpath}/index.mdx`, frontmatter)

  console.log("A new mdx file has been created✨")
})()
