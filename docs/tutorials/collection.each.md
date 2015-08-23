Require javascript-collection-paraphernalia
    
    var collection = require('javascript-collection-paraphernalia')
    
Define an object to iterate over    
    
    var data = {
        one: { id: 1, name: "ONE" },
        two: { id: 2, name: "TWO" },
        three: { id: 3, name: "THREE" },
        four: { id: 4, name: "FOUR" }
      }
    
Use collection to iterate over the properties of the object    
    
    collection.each(data, function(index, item) {
      console.log("I am item #%s", index, item)
    })

Results:-

    I am item #one { id: 1, name: 'ONE' }
    I am item #two { id: 2, name: 'TWO' }
    I am item #three { id: 3, name: 'THREE' }
    I am item #four { id: 4, name: 'FOUR' }
