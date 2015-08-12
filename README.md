# javascript-collection-paraphernalia

[![Build Status](https://travis-ci.org/any-code/javascript-collection-paraphernalia.svg?branch=master)](https://travis-ci.org/any-code/javascript-collection-paraphernalia)

> Javascript collection utilities such as each, filter and find

## Getting Started

### 1. Installation

``` bash
npm install javascript-collection-paraphernalia
```

### 2. Examples

``` javascript
var collection = require('javascript-collection-paraphernalia'),    
    objectCollection = { one: {id: 1}, two: {id: 2}, three: {id: 3}, four: {id: 4}},
    arrayCollection = [{id: 1},{id: 2},{id: 3},{id: 4}];

//Each Item in an Array
collection.each(arrayCollection, function(index, item) { 
    console.log("ITEM: ", index, item); 
});

//Each Property on an Object
collection.each(objectCollection, function(property, item) { 
   console.log("ITEM: ", property, item);  
});

//Filter array by callback
var filtered = collection.filter(arrayCollection, function(item) { 
    return item.id === 3; 
});

//Filter object by callback resulting in an object
var filtered = collection.filter(objectCollection, function(item) { 
    return item.id === 3; 
}, {});

//Filter object by callback resulting in an array
var filtered = collection.filter(objectCollection, function(item) { 
    return item.id === 3; 
});

//Find item in an array
var found = collection.find(arrayCollection, function(item) { 
    return item.id === 3; 
});

//Find property on an object
var found = collection.find(objectCollection, function(item) { 
    return item.id === 3; 
});
```

## Copyright and license
Copyright (c) 2015, Any Code <lee@anycode.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
