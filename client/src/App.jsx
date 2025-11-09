import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import LeftNavigation from "./components/layout/LeftNavigation";
import AuthPage from "./pages/AuthPage";

// 1. Dark theme ko naye theme object se replace kiya
const scrapbookTheme = {
  // Yeh poore app ka main background hoga (cork board)
  background: "bg-[#c7a983] bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')]",
  // Main text color (dark, light nahi)
  text: "text-stone-900"
};

function App() {
  return (
    <Router>
      {/* 2. Nayi theme yahaan apply ki */}
      <main className={`flex min-h-screen ${scrapbookTheme.background} ${scrapbookTheme.text}`}>

        {/* 🧭 LEFT FIXED SIDEBAR */}
        {/* Is component ko alag se style karna padega (neeche file dekho) */}
        <LeftNavigation />

        {/* 📄 RIGHT CONTENT SECTION */}
        {/* 3. Yeh area ab 20% margin lega LeftNav se */}
        <section className="ml-[20%] flex-1 p-10 overflow-y-auto">
          {/* Har page (HomePage, AuthPage, etc.) ko 
            apna "paper" background (paperBoxClass) 
            khud use karna hoga, jaise humne AuthPage mein kiya tha.
          */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </section>

      </main>
    </Router>
  );
}

export default App;