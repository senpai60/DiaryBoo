import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import LeftNavigation from "./components/layout/LeftNavigation";


const bgGradients = [
  {twilightNight:"bg-gradient-to-b from-slate-900 to-zinc-900",
  faintSepia:"bg-gradient-to-t from-stone-100 to-amber-50",
  teaStain:"bg-gradient-to-br from-amber-200 via-stone-100 to-stone-100"}
]

function App() {
  return (
    <Router>
      <main className={`flex min-h-screen text-gray-200 db ${bgGradients[0].twilightNight}`}>

        {/* 🧭 LEFT FIXED SIDEBAR (CHAT HISTORY AREA) */}
        <LeftNavigation/>

        {/* 📄 RIGHT CONTENT SECTION */}
        <section className="ml-[20%] flex-1 p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </section>

      </main>
    </Router>
  );
}

export default App;
