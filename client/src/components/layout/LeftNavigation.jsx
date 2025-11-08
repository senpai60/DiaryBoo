import { Link } from "react-router-dom"

function LeftNavigation() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-1/5 text-gray-100 flex flex-col justify-between shadow-right uif">
          
          {/* 🗂️ Top Section - Chat List */}
          <div className="flex-1 overflow-y-auto p-5 default-scroller">
            <h1 className="text-xl font-bold text-indigo-400 mb-4">Chats</h1>

            {/* Chat items example */}
            <ul className="space-y-3 text-sm">
              {Array.from({ length: 20 }).map((_, i) => (
                <li
                  key={i}
                  className="p-2 rounded hover:bg-gray-800 cursor-pointer transition"
                >
                  💬 Chat {i + 1}
                </li>
              ))}
            </ul>
          </div>

          {/* ⚙️ Bottom Section - Nav Links */}
          <div className="p-4 border-t border-gray-700">
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-indigo-400">🏠 Home</Link>
              <Link to="/blogs" className="hover:text-indigo-400">📰 Blogs</Link>
              <Link to="/about" className="hover:text-indigo-400">ℹ️ About</Link>
            </nav>
          </div>

        </aside>
  )
}

export default LeftNavigation