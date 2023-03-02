
const express = require('express')
const fs = require('fs')
const app = express()

// This array will hold our TODO items
let todos = []

// Read the file and parse the TODO items
fs.readFile('./todos.json', 'utf8', (err, data) => {
  if (err){
    console.log(err)
  }
  todos = JSON.parse(data)
})

// Add a TODO item
app.post('/', (req, res) => {
  // Get the new TODO item from the request body
  const newTodo = req.body

  // Add the new TODO item to the array
  todos.push(newTodo)

  // Write the updated array to the file
  fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
    if (err){
        console.log(err)
      }
    res.send('TODO added')
  })
})

// Get all TODO items
app.get('/', (req, res) => {
  res.json(todos)
})

// Update a TODO item
app.put('/:id', (req, res) => {
  // Get the ID of the TODO item from the request parameters
  const id = req.params.id

  // Get the updated TODO item from the request body
  const updatedTodo = req.body

  // Find the index of the TODO item with the matching ID
  const index = todos.findIndex((todo) => todo.id === id)

  // Replace the TODO item at the specified index with the updated item
  todos[index] = updatedTodo

  // Write the updated array to the file
  fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
    if (err){
        console.log(err)
      }
    res.send('TODO updated')
  })
})

// Delete a TODO item
app.delete('/:id', (req, res) => {
  // Get the ID of the TODO item from the request parameters
  const id = req.params.id

  // Find the index of the TODO item with the matching ID
  const index = todos.findIndex((todo) => todo.id === id)

  // Remove the TODO item at the specified index
  todos.splice(index, 1)

  // Write the updated array to the file
  fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
    if (err){
        console.log(err)
      }
    res.send('TODO deleted')
  })
})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})