const express = require ('Express')
const path = require ('path')
const app = express()
const localPORT = 3000

app.set('port',localPORT)

app.use(express.static(path.join(__dirname,'build')))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'build','index.html'))
})

app.listen(app.get('port'),function(){
  console.log('listening on port',app.get('port'))
})
