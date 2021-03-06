/*
            _                   ____          _
           / \   _ __  _   _   / ___|___   __| | ___
          / _ \ | '_ \| | | | | |   / _ \ / _` |/ _ \
         / ___ \| | | | |_| | | |__| (_) | (_| |  __/
        /_/   \_\_| |_|\__, |  \____\___/ \__,_|\___|
                       |___/

 */

/**
 * @description A bare minimum set of utilities for working with collections
 * @constructor
 */
function Collection() {}

/**
 * @description Iterate over each element in a collection.
 *
 * @param {object|array} collection The collection to iterate over can be either an array or an object
 * @param {callback(index, element)} callback is executed for each element in the collection
 *
 * @tutorial collection.each
 */
Collection.prototype.each = function(collection, callback) {
  (Array.isArray(collection) ? eachOfArray : eachOfObject)(collection, callback);
};

/**
 * @description Return a new collection being a filtered subset of elements from a collection
 *
 * @param {object|array} collection The collection to iterate over can be either an array or an object
 * @param {callback(element)} callback Predicate callback is executed for each element in the collection and must
 *        return true if the element will be included in the filter
 * @param {Object|Array} [empty=empty array] You can provide an empty array or object to be populated by the filter procedure. By
 *        default the returned collection is an array however you can populate properties on an object by specifying an
 *        object as the empty.
 *
 * @tutorial collection.filter
 *
 * @returns {object|array} collection
 */
Collection.prototype.filter = function(collection, callback, empty) {
  var result = empty || [];
  this.each(collection, function(index, item) {
    if (callback(item)) {
      (Array.isArray(result) ? collectArray : collectObject)(index, item, result);
    }
  });

  return result;
};

/**
 * @description Find the first item satisfied by predicate callback in the provided collection
 *
 * @param {object|array} collection The collection to iterate over can be either an array or an object
 * @param {callback(element)} callback Predicate callback is executed for each element in the collection and must
 *        return true if the element will be included in the filter
 *
 * @tutorial collection.find
 *
 * @returns {* | null} returns the found element or null if no element wa found
 */
Collection.prototype.find = function(collection, callback) {
  var found = null;

  this.each(collection, function(index, item) {
    if (callback(item)) {
      found = item;
      return false;
    }
  });

  return found;
};

/**
 * Adds the value to the collection, key is always ignored
 *
 * @param {Integer} key
 * @param {Object} value
 * @param {Array} collection
 * @private
 */
function collectArray(key, value, collection) {
  collection.push(value);
}

/**
 * Adds the specified key value pair to the collection
 *
 * @param {String} key
 * @param {Object} value
 * @param {Object} collection
 * @private
 */
function collectObject(key, value, collection) {
  collection[key] = value;
}

/**
 * for each item in object execute callback
 *
 * @param {Array} object
 * @param {function} callback
 * @private
 */
function eachOfArray(object, callback) {
  var index = 0;
  for (; index < object.length; index++) {
    if (callback.call(object[index], index, object[index]) === false) {
      break;
    }
  }
}

/**
 * for each property on object execute callback
 *
 * @param {Object} object
 * @param {function} callback
 * @private
 */
function eachOfObject(object, callback) {
  var index;
  for (index in object) {
    if (callback.call(object[index], index, object[index]) === false) {
      break;
    }
  }
}

module.exports = new Collection();
