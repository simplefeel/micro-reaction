const observable = require("../dist/micro-reaction.js").observable;
const observe = require("../dist/micro-reaction.js").observe;

const ob = observable([]);

observe(() => console.log(ob));

// logs []
// logs [2]
ob.push(2);