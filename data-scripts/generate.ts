import { SimpleListGenerator } from './_generators/SimpleListGenerator'
import ListHandler from './_helpers/runtime'
import lists from './lists'

const main = async () => {
  const listHandler = new ListHandler()
  const forceLanguage = process.argv.length > 2 ? process.argv[2] : undefined

  Object.keys(lists).forEach((language) => {
    if (forceLanguage !== undefined && language !== forceLanguage) {
      return
    }
    const languageLists = lists[language]
    Object.keys(languageLists).forEach((name) => {
      const data = languageLists[name]

      if (data.customList) {
        listHandler.registerCustomList(language, name, data.generator, data.options)
      } else {
        listHandler.registerList(
          language,
          name,
          data.source,
          data.generator || SimpleListGenerator,
          data.options,
        )
      }
    })
  })

  await listHandler.run()
}

main()
