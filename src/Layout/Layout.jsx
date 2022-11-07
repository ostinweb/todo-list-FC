export default function Layout({ children }) {
  return (
    <div>
      <div className="flex gap-3 justify-center items-center m-11">
        {children}
      </div>
    </div>
  )
}
