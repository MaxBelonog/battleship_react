let Person = require('./models').Person
let Todo = require('./models').Todo

Person.create({
  name: 'Kevin'
}).then(function(person){
  console.log(person.get())

return Todo.create({
  description:'watch Star-Wars',
  completed:false
  })
})
.then(function(todo){
  console.log(todo.get())
}).catch(function(error){
  console.log(error)
})
