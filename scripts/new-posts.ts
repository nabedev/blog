import { stripIndent } from "common-tags"
import { mkdirSync, writeFileSync } from "fs"
import { QuestionCollection, prompt } from "inquirer"
import slugify from "slugify"

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

  const offsetmillisec = new Date().getTimezoneOffset() * 60 * 1000
  const frontmatter = stripIndent`
  ---
    title: ${title}
    date: ${new Date(offsetmillisec).toISOString()}
  ---
  `

  writeFileSync(`${dirpath}/index.mdx`, frontmatter)

  console.log("A new mdx file has been created✨")
})()
