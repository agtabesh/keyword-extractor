const englishStopWords = require('../StopWords/EnglishStopWords')

class Tokenizer {
  /**
   * @method constructor
   *
   * @param {Object} config
   *
   * @return {void}
   */
  constructor (config) {
    const defaultConfig = {
      minTokenLength: 2,
      removeSpecialCharacters: true,
      specialCharactersRegex: /(\.|:|\+|-|=|\(|\)|"|'|!|\?|;)/g
    }
    this.config = Object.assign(defaultConfig, config)
  }

  /**
   * @method clearText
   *
   * @param {String} text
   *
   * @return {String}
   */
  clearText (text) {
    return text.replace(this.config.specialCharactersRegex, ' ')
  }

  /**
   * @method removeStopWords
   *
   * @param {String} text
   *
   * @return {String}
   */
  removeStopWords (text) {
    return text.replace(new RegExp(`\\b(${englishStopWords.join('|')})\\b`, 'g'), ' ')
  }

  /**
   * @method tokenize
   *
   * @param {String} text
   *
   * @return {String}
   */
  tokenize (text) {
    let _text = text
    if (this.config.removeSpecialCharacters) {
      _text = this.clearText(_text)
    }
    _text = this.removeStopWords(_text)
    return _text.split(/(\s+|\.)/)
      .map(x => x.toLowerCase().trim())
      .filter(x => x.length >= this.config.minTokenLength)
  }
}

module.exports = Tokenizer
