Require javascript-collection-paraphernalia

``` javascript    
var collection = require('javascript-collection-paraphernalia')
```
    
Define an object to iterate over    
    
``` javascript
var data = {
    one: { id: 1, name: "ONE" },
    two: { id: 2, name: "TWO" },
    three: { id: 3, name: "THREE" },
    four: { id: 4, name: "FOUR" }
  }
```  
    
Use collection to find the first item matching the predicate callback  
    
``` javascript
var results = collection.filter(data, function(item) {
  return item.id > 2
})
```

Results:-

``` javascript
{ 
  id: 3, 
  name: 'THREE' 
}
```
