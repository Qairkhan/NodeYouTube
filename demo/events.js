const EventEmitter = require('events')

const emitter  =new EventEmitter()

emitter.on( 'test', data=> {
    console.log('ON: test', data)
})