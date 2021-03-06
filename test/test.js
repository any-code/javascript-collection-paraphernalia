var collection = require('../index'),
    objectCollection = { one: {id: 1}, two: {id: 2}, three: {id: 3}, four: {id: 4}},
    objectCollectionLength = 4,
    arrayCollection = [{id: 1},{id: 2},{id: 3},{id: 4}];

exports.testEachOfArray = function(test) {
    var visits = 0;
    collection.each(arrayCollection, function() { visits++; });
    test.equals(visits, arrayCollection.length, arrayCollection.length + "items in the collection were only visited " +
        visits + " times");
    test.done();
};

exports.testEachOfObject = function(test) {
    var visits = 0;
    collection.each(objectCollection, function() { visits++; });
    test.equals(visits, objectCollectionLength, objectCollectionLength + "items in the collection were only visited " +
        visits + " times");
    test.done();
};

exports.testEachOfObjectWithNullValue = function(test) {
    var visits = 0;
    collection.each(null, function() { visits++; });
    test.equals(visits, 0, "empty collection was visited " + visits + " times");
    test.done();
};

exports.testEachOfObjectWithUndefinedValue = function(test) {
    var visits = 0;
    collection.each(undefined, function() { visits++; });
    test.equals(visits, 0, "empty collection was visited " + visits + " times");
    test.done();
};

exports.testEachOfObjectWithEmptyObjectValue = function(test) {
    var visits = 0;
    collection.each({}, function() { visits++; });
    test.equals(visits, 0, "empty collection was visited " + visits + " times");
    test.done();
};

exports.testFilterArray = function(test) {
    var filtered = collection.filter(arrayCollection, function(item) { return item.id === 3; });
    test.deepEqual(filtered, [{id:3}], "the filtered result was not as expected");
    test.done();
};

exports.testFilterObjectAsObject = function(test) {
    var filtered = collection.filter(objectCollection, function(item) { return item.id === 3; }, {});
    test.deepEqual(filtered, {three: {id:3}}, "the filtered result was not as expected");

    var filtered = collection.filter(objectCollection, function(item) { return item.id === 3 || item.id === 4; }, {});
    test.deepEqual(filtered, {three: {id:3}, four: {id:4}}, "the filtered result was not as expected");
    test.done();
};

exports.testFilterObjectAsArray = function(test) {
    var filtered = collection.filter(objectCollection, function(item) { return item.id === 3; });
    test.deepEqual(filtered, [{id:3}], "the filtered result was not as expected");

    var filtered = collection.filter(objectCollection, function(item) { return item.id === 3 || item.id === 4; });
    test.deepEqual(filtered, [{id:3}, {id:4}], "the filtered result was not as expected");
    test.done();
};

exports.testFindArray = function(test) {
    var found = collection.find(arrayCollection, function(item) { return item.id === 3; });
    test.deepEqual(found, {id:3}, "the found result was not as expected");
    test.done();
};

exports.testFindObject = function(test) {
    var found = collection.find(objectCollection, function(item) { return item.id === 3; });
    test.deepEqual(found, {id:3}, "the found result was not as expected");
    test.done();
};
