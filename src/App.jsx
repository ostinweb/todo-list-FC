import { useState } from 'react'
import { generateId } from './utils/generateId'

//components
import Count from './components/Count'
import Input from './components/Input'
import Layout from './Layout/Layout'
import Header from './components/Header'
import Todo from './components/Todo'

export default function App() {
  const [state, setState] = useState('')
  const [todos, setTodos] = useState([])

  //сетим состояние Input text
  const handleSetState = (e) => {
    setState(e.target.value)
  }
  //добавляем объект Todo в todos
  const handleAddTodos = () => {
    // проверка на пустую todo
    if (state.trim() === '') {
      alert('oops')
      return
    }
    setTodos(todos.concat({ text: state, done: false, id: generateId() }))
    setState('')
  }
  //сетим текущий done в todos
  //проверяем по id, а не по name => профит
  const handleSetDone = (id) => {
    const todosCopy = [...todos]
    const current = todosCopy.find((item) => item.id === id)
    current.done = !current.done
    setTodos(todosCopy)
  }
  //удалием todo
  const handleDeleteTodo = (id) => {
    const todosDelete = [...todos]
    const deleteIndex = todosDelete.findIndex((item) => item.id === id)
    todosDelete.splice(deleteIndex, 1)
    setTodos(todosDelete)
  }

  return (
    <>
      <Header />
      <Layout>
        <Input
          state={state}
          handleAddTodos={handleAddTodos}
          handleSetState={handleSetState}
        />
        <Count todos={todos} />
      </Layout>
      {todos.map((todo) => (
        <Todo
          handleSetDone={handleSetDone}
          handleDeleteTodo={handleDeleteTodo}
          todo={todo}
          key={todo.id}
        />
      ))}
    </>
  )
}
