import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function LeftNavigation() {
  const { logoutUser, user, diaryEntries } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutUser();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <aside className="fixed left-0 top-0 h-screen w-1/5 text-gray-100 flex flex-col justify-between shadow-right uif">
      {/* 🗂️ Top Section - Chat List */}
      <div className="flex-1 overflow-y-auto p-5 default-scroller">
        <h1 className="text-xl font-bold text-indigo-400 mb-4">Chats</h1>

        <ul className="space-y-3 text-sm">
          {diaryEntries.length > 0 ? (
            diaryEntries.map((entry, i) => (
              <li
                key={i}
                className="p-2 rounded hover:bg-gray-800 cursor-pointer transition flex flex-col"
              >
                <span className="font-semibold">
                  {entry.title.trim().length > 50
                    ? entry.title.trim().slice(0, 50) + "..."
                    : entry.title.trim()}
                </span>
                {/* CreatedAt formatted date below title */}
                <span className="text-xs text-gray-400 mt-1">
                  {new Date(entry.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </li>
            ))
          ) : (
            <p>create your first entry :)</p>
          )}
        </ul>
      </div>

      {/* ⚙️ Bottom Section - Nav Links */}
      <div className="p-4 border-t border-gray-700">
        <nav className="flex flex-col gap-2 text-sm">
          <Link to="/" className="hover:text-indigo-400">
            🏠 Home
          </Link>
          <Link to="/blogs" className="hover:text-indigo-400">
            📰 Blogs
          </Link>

          {user && (
            <Link
              onClick={(e) => handleLogout(e)}
              className="hover:text-indigo-400"
            >
              ℹ️ Logout
            </Link>
          )}
        </nav>
      </div>
    </aside>
  );
}

export default LeftNavigation;
