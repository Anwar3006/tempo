const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log('Data received')
});

customEmitter.emit('response')

//learn file streams and how to send chunkced data instead of the full data to the client