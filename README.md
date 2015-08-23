# javascript-collection-paraphernalia

[![Build Status](https://travis-ci.org/any-code/javascript-collection-paraphernalia.svg?branch=master)](https://travis-ci.org/any-code/javascript-collection-paraphernalia)

> Javascript collection utilities such as each, filter and find for use with both object and array 

## Getting Started

### 1. Installation

``` bash
npm install javascript-collection-paraphernalia
```

### 2. Examples

Require javascript-collection-paraphernalia
    
    var collection = require('javascript-collection-paraphernalia')
    
Define an object to iterate over    
    
    var data = {
        one: { id: 1, name: "ONE" },
        two: { id: 2, name: "TWO" },
        three: { id: 3, name: "THREE" },
        four: { id: 4, name: "FOUR" }
      }

#### collection.each example

Use collection.each to iterate over the properties of the object executing the callback for each element    
    
    collection.each(data, function(index, item) {
      console.log("I am item #%s", index, item)
    })

Results:-

    I am item #one { id: 1, name: 'ONE' }
    I am item #two { id: 2, name: 'TWO' }
    I am item #three { id: 3, name: 'THREE' }
    I am item #four { id: 4, name: 'FOUR' }

#### collection.filter example
    
> collection.filter can be used to return an array or an object. This means it can be used to create a new object 
containing a subset of properties
    
Use collection.filter to filter the properties of the object to an array    
    
    var results = collection.filter(data, function(item) {
      return item.id > 2
    })

Results:-

    [ 
      { 
        id: 3, 
        name: 'THREE' 
      }, { 
        id: 4, 
        name: 'FOUR' 
      } 
    ]


Use collection.filter to filter the properties of the object to an object with keys corresponding to the original keys    
    
    var results = collection.filter(data, function(item) {
      return item.id > 2
    }, {})

Results:-

    { 
      three: { 
        id: 3, 
        name: 'THREE' 
      },
      four: { 
        id: 4, 
        name: 'FOUR' 
      }
    }

#### collection.find example
    
Use collection.find to find the first item matching the predicate callback  
    
    var results = collection.filter(data, function(item) {
      return item.id > 2
    })

Results:-

    { 
      id: 3, 
      name: 'THREE' 
    }

## Copyright and license
Copyright (c) 2015, Any Code <lee@anycode.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
