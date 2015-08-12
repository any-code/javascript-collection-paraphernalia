/*
            _                   ____          _
           / \   _ __  _   _   / ___|___   __| | ___
          / _ \ | '_ \| | | | | |   / _ \ / _` |/ _ \
         / ___ \| | | | |_| | | |__| (_) | (_| |  __/
        /_/   \_\_| |_|\__, |  \____\___/ \__,_|\___|
                       |___/

        javascript-collection-paraphernalia
 */

function Collection() {}

/**
 * Each element in a collection
 *
 * @param {Object} object
 * @param {function(index, item)} callback
 * @returns {Object}
 */
Collection.prototype.each = function(object, callback) {
    (Array.isArray(object) ? eachOfArray : eachOfObject)(object, callback);
    return object;
};

/**
 * Filter a collection by callback starting at empty object or array, defaults to an array.
 * @param {Array} object
 * @param {function(index, item)} callback
 * @param {Object|Array} empty
 * @returns {Array}
 */
Collection.prototype.filter = function(object, callback, empty) {
    var result = empty || [];
    this.each(object, function(index, item) {
        if (callback(item)) {
            (Array.isArray(result) ? collectArray : collectObject)(index, item, result);
        }
    });

    return result;
};

/**
 * Given a collection, find an item using the predicate callback
 * @param collection
 * @param callback
 * @returns {*}
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
 */
function collectObject(key, value, collection) {
    collection[key] = value;
}

/**
 * for each item in object execute callback
 *
 * @param {Array} object
 * @param {function} callback
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
