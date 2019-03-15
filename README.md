# @agtabesh/keyword-extractor

[![npm (scoped)](https://img.shields.io/badge/npm-v1.1.1-blue.svg)](https://www.npmjs.com/package/@agtabesh/keyword-extractor)

[![npm (scoped)](https://img.shields.io/badge/try%20on%20runkit-demo-green.svg)](https://runkit.com/embed/vgn4psqpmess)

TF-IDF is a statistical measure used to evaluate how important a word is to a document in a collection or corpus. This package uses TF-IDF to extract important keywords from a document.

## Install

```
$ npm install @agtabesh/keyword-extractor --save
```

## Usage

```js
const { EnglishTokenizer, KeywordExtractor } = require("@agtabesh/keyword-extractor")
const documents = [
  'Austria will press ahead with a proposed tax on internet giants after plans for an European Union-wide levy fell through this week, Finance Minister Hartwig Loeger said on Friday.',
  'Facebook Inc said on Friday it would use artificial intelligence to combat the spread of intimate photos shared without peoples permission, sometimes called "revenge porn," on its social networks.',
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
```

All contributions are welcome.
