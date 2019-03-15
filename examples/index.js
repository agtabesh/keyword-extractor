const { EnglishTokenizer, KeywordExtractor } = require('../src')

const documents = [
  'Austria will press ahead with a proposed tax on internet giants after plans for an European Union-wide levy fell through this week, Finance Minister Hartwig Loeger said on Friday.',
  'Facebook Inc said on Friday it would use artificial intelligence to combat the spread of intimate photos shared without people\'s permission, sometimes called "revenge porn," on its social networks.',
  'Tesla Inc unveiled its Model Y electric sports utility vehicle on Thursday evening in California, promising a much-awaited crossover that will face competition from European car makers rolling out their own electric rivals.'
]

const tokenizer = new EnglishTokenizer()
const keywordExtractor = new KeywordExtractor()
keywordExtractor.setTokenizer(tokenizer)

documents.forEach((text, i) => {
  keywordExtractor.addDocument(i, text)
})

const randomDocument = documents[Math.floor(Math.random() * documents.length)]
const keywords = keywordExtractor.extractKeywords(randomDocument, {
  sortByScore: true,
  limit: 10
})

console.log(keywords)
