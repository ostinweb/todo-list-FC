export default function Todo({ todo, handleSetDone }) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2  m-3 bg-slate-300">
        <div className="flex items-center py-3 px-6 gap-4 ">
          <div>
            <input
              type="checkbox"
              onChange={() => handleSetDone(todo.id)}
              checked={todo.done}
            />
          </div>
          <div className={todo.done ? 'text-slate-400' : ''}>
            <p>{todo.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
