import { useState } from 'react'
import Todo from './components/Todo'
import { generateId } from './utils/generateId'
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
    <div>
      <div className="flex justify-center m-4">
        <h1 className="text-3xl font-bold underline">Todo List</h1>
        <h2>{todos.length}</h2>
      </div>
      <div>
        <div className="flex gap-3 justify-center items-center m-11">
          <div className="w-1/3">
            <input
              type="text"
              onChange={(e) => handleSetState(e)}
              value={state}
              className="w-full py-2 px-2 border rounded border-slate-400 hover:border-slate-600"
            />
          </div>
          <div>
            <button
              className="border border-slate-400 py-2 px-4 rounded hover:border-slate-600"
              onClick={handleAddTodos}
            >
              Добавть
            </button>
          </div>
        </div>
      </div>
      {todos.map((todo) => (
        <Todo handleSetDone={handleSetDone} todo={todo} key={todo.id} />
      ))}
    </div>
  )
}
