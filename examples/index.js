const { EnglishTokenizer, KeywordExtractor } = require('../src')
const documents = require('./data')

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
