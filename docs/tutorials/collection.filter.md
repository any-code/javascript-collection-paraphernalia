Require javascript-collection-paraphernalia
    
    var collection = require('javascript-collection-paraphernalia')
    
Define an object to iterate over    
    
    var data = {
        one: { id: 1, name: "ONE" },
        two: { id: 2, name: "TWO" },
        three: { id: 3, name: "THREE" },
        four: { id: 4, name: "FOUR" }
      }

    
Use collection to filter the properties of the object to an array    
    
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


Use collection to filter the properties of the object to an array    
    
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

