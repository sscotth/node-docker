const { createServer } = require('http')

const PORT = process.env.PORT || 8080

const logRequest = ({ method, url, headers: { 'user-agent': agent } }) => {
  const timeStamp = new Date()
  console.log(`[${timeStamp}] "${method} ${url}" "${agent}"`)
}

createServer((req, res) => {
  logRequest(req)
  res.end(JSON.stringify(process.versions))
})
.listen(PORT, () => console.log(`Server running on port ${PORT}`))
