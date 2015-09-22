function cleanObject(object) {
    for (var key in object) {

        var value = object[key];

        if(value === undefined) {
            delete object[key];
        }

        if (typeof value === 'object' && !(value instanceof Date)) {
            cleanObject(object[key]);

            if(!Array.isArray(value) && !Object.keys(value).length) {
                delete object[key];
            }
        }
    }

    return object;
}

module.exports = cleanObject;