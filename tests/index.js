var test = require('tape'),
    dev = require('../');

test('empty object', function(t){
    t.plan(1);

    var object = {},
        expectedObject = {};

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('shallow', function(t){
    t.plan(1);

    var object = {
            a: {b: 1},
            b: {}
        },
        expectedObject = {
            a: {b: 1}
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: {
                c: {}
            }
        },
        expectedObject = {
            a: 1
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('array', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: {
                c: []
            }
        },
        expectedObject = {
            a: 1,
            b: {
                c: []
            }
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep 1', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: [
                {
                    c: {
                        d: {}
                    }
                }
            ]
        },
        expectedObject = {
            a: 1,
            b: []
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep 2', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: [
                {
                    c: {
                        d: [
                            'a',
                            {},
                            {},
                            {},
                            []
                        ]
                    }
                }
            ]
        },
        expectedObject = {
            a: 1,
            b: [
                {
                    c: {
                        d: ['a', , , , []]
                    }
                }
            ]
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep 3', function(t) {
    t.plan(1);

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
        },
        expectedObject = {
            a: 1,
            b: {
                g: 2
            }
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep 4', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: [
                {
                    c: {
                        d: [
                            'a',
                            undefined,
                            {},
                            {},
                            []
                        ]
                    }
                }
            ]
        },
        expectedObject = {
            a: 1,
            b: [
                {
                    c: {
                        d: ['a', , , , []]
                    }
                }
            ]
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep 5', function(t) {
    t.plan(1);

    var object = {
            a: 1,
            b: {},
            c: [1, {}, 2],
            d: {
                a: [],
                b: 1
            }
        },
        expectedObject = {
            a:1,
            c: [1, , 2],
            d: {
                a: [],
                b: 1
            }
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('deep date', function(t) {
    t.plan(1);

    var value = new Date();

    var object = {
            a: 1,
            b: [
                {
                    c: {
                        d: [
                            value,
                            undefined,
                            {},
                            {}
                        ]
                    }
                }
            ]
        },
        expectedObject = {
            a: 1,
            b: [
                {
                    c: {
                        d: [value]
                    }
                }
            ]
        };

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});


test('undefined', function(t) {
    t.plan(1);

    var object = undefined,
        expectedObject = undefined;

    dev(object);

    t.deepEqual(object, expectedObject, 'Got correct result');
});

test('null', function(t) {
    t.plan(1);

    var object = null,
        expectedObject = null;

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});

test('value type', function(t) {
    t.plan(1);

    var object = 'a',
        expectedObject = 'a';

    t.deepEqual(dev(object), expectedObject, 'Got correct result');
});
