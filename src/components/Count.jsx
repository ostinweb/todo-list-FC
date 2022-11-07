export default function Count({ todos }) {
  return (
    <div className="flex gap-3">
      <div>
        <span> all : {todos.length}</span>
      </div>
      <div> done : {todos.filter((item) => item.done).length}</div>
      <div>
        <span>
          left : {todos.length - todos.filter((item) => item.done).length}
        </span>
      </div>
    </div>
  )
}
