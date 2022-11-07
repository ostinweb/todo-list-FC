import React, { useState } from 'react'
export default function Todo({ todo, handleSetDone, handleDeleteTodo }) {
  const [mouseEvent, setMouseEvent] = useState(false)
  return (
    <div className="flex justify-center">
      <div className="w-1/2  m-3 bg-slate-300">
        <div
          className="flex items-center py-3 px-6 gap-4 "
          onMouseEnter={() => setMouseEvent(true)}
          onMouseLeave={() => setMouseEvent(false)}
        >
          <div>
            <input
              type="checkbox"
              onChange={() => handleSetDone(todo.id)}
              checked={todo.done}
            />
          </div>

          <div className="flex justify-between w-full">
            {/*проверка done -> меняеем стили у todo*/}
            <div className={todo.done ? 'text-slate-400' : ''}>
              <p>{todo.text}</p>
            </div>
            <div>
              <button
                className={mouseEvent ? 'text-red-500' : 'hidden'}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
