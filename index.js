import express from 'express'
import data from './data.json'  assert {type : "json"}
import cors from 'cors'

const products=Object.entries(data)[0][1]
const app= express();
app.use(cors())

app.get('/products',  (req , res) => {
  res.send(products)
  
})

app.get('/products/:id', (req,res) => {
  const { id }= req.params

  const desiredproduct = products.find( (product) => product.id == id)
  
  res.send(desiredproduct)
})   
    
app.listen(7000, () => console.log("server started"))




