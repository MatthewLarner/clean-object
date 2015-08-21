# clean-object
Recursively delete properties from an object that have values of {}, or undefined

# Usage

```javascript
var cleanObject = require('clean-object');

var object = {
    a: 1,
    b: {
        c: {
            d: {
                e: {},
                f: undefined
            }
        },
        g: 2
    }
}

cleanObject(object);
```

will result in

```javascript

{
    a: 1,
    b: {
        g: 2
    }
}
```
