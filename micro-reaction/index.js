// 存储依赖对象
const storeReactions = new WeakMap();

// 存储代理对象
const storeProxys = new WeakMap();

// 中转数组，用来临时存储当前可观察对象的反应函数
const storeFns = [];

/**
 * @description: 使一个对象变成可观察对象
 * @param obj: 原始对象 
 * @return: 返回一个经过代理的对象
 */
export function observable(obj = {}) {
    return storeProxys.get(obj) || createObservable(obj)
}

/**
 * @description: 创建可观察的对象
 * @param obj: 原始对象
 * @return: 被观察的对象
 */
function createObservable(obj) {
    const proxyObj = new Proxy(obj, handlers());
    storeReactions.set(obj, new Map())
    storeProxys.set(obj, proxyObj)
    return proxyObj
}

/**
 * @description: 观察执行函数
 * @param fn: 函数
 * @return: null
 */
export function observe(fn) {
    if (storeFns.indexOf(fn) === -1) {
        try {
            storeFns.push(fn);
            Reflect.apply(fn, this, arguments)
        } finally {
            // 记得每次收集完当前依赖，需要清空storeFns
            storeFns.pop()
        }
    }
}

/**
 * @description: 具体的代理细节
 * @param null
 * @return: null
 */
function handlers() {
    return {
        get: (target, key, receiver) => {
            const result = Reflect.get(target, key, receiver);
            depsCollect({ target, key })
            const observableResult = storeProxys.get(result);
            if (typeof result === 'object' && result != null && storeFns.length > 0) {
                return observable(result)
            }
            return observableResult || result
        },
        set: (target, key, value, receiver) => {
            const result = Reflect.set(target, key, value, receiver);
            executeReactions({ target, key })
            return result
        }
    }
}
/**
 * @description: 依赖收集，将依赖按照key为对象属性，value为可执行函数存储到map结构中
 * @param target: 目标对象
 * @param key: 目标属性
 * @return: null
 */
function depsCollect({ target, key }) {
    const fn = storeFns[storeFns.length - 1];
    if (fn) {
        const mapReactions = storeReactions.get(target);
        if (!mapReactions.get(key)) {
            mapReactions.set(key, fn)
        }
    }
}
/**
 * @description: 依赖执行
 * @param target: 目标对象
 * @param key: 目标属性
 * @return: null
 */
function executeReactions({ target, key }) {
    const mapReactions = storeReactions.get(target);
    if (mapReactions.has(key)) {
        const reaction = mapReactions.get(key);
        reaction();
    }
}