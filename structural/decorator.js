// Decorator Design Pattern

class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}: ${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = function() {
        return server.url
    }
    return server
}

const s1 = aws(new Server('12.34.56.78', 8080))
console.log(s1.isAws);
console.log(s1.awsInfo());


function azzure(server) {
    server.isAzzure = true
    server.port += 500
    return server
}

s2 = azzure(new Server('88.88.88.88', 8080))
console.log(s2.isAzzure);
console.log(s2.port);



