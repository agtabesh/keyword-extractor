const Storage = require('./Storage/RamStorage')

class KeywordExtractor {
  /**
   * @method constructor
   *
   * @param {Array} docs
   *
   * @return {void}
   */
  constructor () {
    this.dictionary = new Storage()
    this.documents = new Storage()
  }

  /**
   * @method setTokenizer
   *
   * @param {Object} tokenizer
   *
   * @return {void}
   */
  setTokenizer (tokenizer) {
    this.tokenizer = tokenizer
  }

  /**
   * @method setStopWords
   *
   * @param {Array} stopWords
   *
   * @return {void}
   */
  setStopWords (stopWords) {
    this.stopWords = stopWords
  }


  /**
   * @method extractKeywords
   *
   * @param {String} text
   *
   * @return {Array}
   */
  extractKeywords (text, { sortByScore = false, limit = false }) {
    let results = new Map()
    const tokens = this.tokenizer.tokenize(text)
    for (const token of tokens) {
      const tokenInfo = this.dictionary.get(token)
      const tf = tokenInfo.count / tokens.length
      const idf = Math.log(this.getDocumentsCount() / tokenInfo.documents.size)
      const tfidf = tf * idf
      results.set(token, tfidf)
    }

    results = [...results]
    if (sortByScore) {
      results.sort((a, b) => b[1] - a[1])
    }
    if (limit) {
      results = results.splice(0, limit)
    }
    return results
  }

  /**
   * @method getDocumentsCount
   *
   * @return {Number}
   */
  getDocumentsCount () {
    return this.documents.size()
  }

  /**
   * @method addDocument
   *
   * @param {Integer} id
   * @param {String} text
   *
   * @return void
   */
  addDocument (id, text) {
    const tokens = this.tokenizer.tokenize(text)
    for (const token of tokens) {
      this.increment(token, id)
    }
    this.documents.set(id, text)
  }

  /**
   * @method increment
   *
   * @param {String} token
   *
   * @return {void}
   */
  increment (token, documentId) {
    if (!this.dictionary.has(token)) {
      const tokenInfo = {
        count: 1,
        documents: new Set([documentId])
      }
      this.dictionary.set(token, tokenInfo)
    } else {
      this.dictionary.get(token).count += 1
      this.dictionary.get(token).documents.add(documentId)
    }
  }
}

module.exports = KeywordExtractor
