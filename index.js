const express = require('express'); 

const principalRouter = require('./routers/principalRouter');




const servidor = express()

servidor.use('/', principalRouter)
servidor.listen(3000)