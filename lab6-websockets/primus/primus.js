const Primus = require('primus');

let go = (server) => {
    let primus = new Primus(server)
    primus.on('connection', (spark) => {
        console.log('received spark 🔥')


    });
}

module.exports.go = go;