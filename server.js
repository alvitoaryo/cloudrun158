const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Ini branch dev, branch dimana proses development dilakukan')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
