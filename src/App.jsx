import { useState } from 'react'
import Todo from './components/Todo'
import { generateId } from './utils/generateId'
import Count from './components/Count'
import Input from './components/Input'
import Layout from './Layout/Layout'
import Header from './components/Header'
export default function App() {
  const [state, setState] = useState('')
  const [todos, setTodos] = useState([])
  const handleSetState = (e) => {
    setState(e.target.value)
  }
  const handleAddTodos = () => {
    setTodos(todos.concat({ text: state, done: false, id: generateId() }))
    setState('')
  }
  const handleSetDone = (id) => {
    const todosCopy = [...todos]
    const current = todosCopy.find((item) => item.id === id)
    current.done = !current.done
    setTodos(todosCopy)
  }
  return (
    <>
      <Header />
      <Layout>
        <Input
          handleAddTodos={handleAddTodos}
          state={state}
          handleSetState={handleSetState}
        />
        <Count todos={todos} />
      </Layout>
      {todos.map((todo) => (
        <Todo handleSetDone={handleSetDone} todo={todo} key={todo.id} />
      ))}
    </>
  )
}
