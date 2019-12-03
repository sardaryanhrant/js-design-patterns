/*
In computer programming, the proxy pattern is a software design pattern. A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.
*/
function networkFetch(url) {
    return `${url} response from server`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if(cache.has(url)) {
            return `${url} - response from cache`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }    
})

console.log(proxiedFetch('angular.io')); // response from server
console.log(proxiedFetch('react.io')); // response from server
console.log(proxiedFetch('angular.io')); // response from cache

