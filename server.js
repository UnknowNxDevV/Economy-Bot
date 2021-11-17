const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://').then(console.log('Pinged!'))
}, 240000)