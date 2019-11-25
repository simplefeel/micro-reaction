const observable = require("../dist/micro-reaction.js").observable;
const observe = require("../dist/micro-reaction.js").observe;

const ob = observable({
    a: {
        b: 1
    }
});

observe(() => console.log(ob.a.b));

// logs 1
// logs 2
ob.a.b = 2;