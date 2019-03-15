class Storage {
  /**
   * @method constructor
   *
   * @return {void}
   */
  constructor () {
    this.storage = new Map()
  }

  /**
   * @method set
   *
   * @param {String} key
   * @param {String} value
   *
   * @return {void}
   */
  set (key, value) {
    this.storage.set(key, value)
  }

  /**
   * @method get
   *
   * @param {String} key
   *
   * @return {String}
   */
  get (key) {
    return this.storage.get(key)
  }

  /**
   * @method has
   *
   * @param {*} key
   *
   * @return {Boolean}
   */
  has (key) {
    return this.storage.has(key)
  }

  /**
   * @method size
   *
   * @return {Number}
   */
  size () {
    return this.storage.size
  }
}

module.exports = Storage
