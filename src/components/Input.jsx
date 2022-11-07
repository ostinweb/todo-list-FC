export default function Input({ state, handleAddTodos, handleSetState }) {
  return (
    <>
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
          Добавить
        </button>
      </div>
    </>
  )
}
