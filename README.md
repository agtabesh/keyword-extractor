# @agtabesh/keyword-extractor

[![npm (scoped)](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/@agtabesh/keyword-extractor)

TF-IDF is a statistical measure used to evaluate how important a word is to a document in a collection or corpus. This package uses TF-IDF to extract important keywords from a document.

## Install

```
$ npm install @agtabesh/keyword-extractor --save
```

## Usage

```js
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
```

All contributions are welcome.
