// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
var player = new Plyr('audio', { controls: ['play-large', 'play', 'progress', 'current-time', 'volume'], ratio: '3:1' })

// Expose player so it can be used from the console
window.player = player
