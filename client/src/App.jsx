import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import LeftNavigation from "./components/layout/LeftNavigation";
import AuthPage from "./pages/AuthPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const scrapbookTheme = {
  background:
    "bg-[#c7a983] bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')]",
  text: "text-stone-900",
};

function App() {
  const { loading, user } = useContext(AuthContext);

  return (
    <Router>
      <main
        className={`flex min-h-screen ${scrapbookTheme.background} ${scrapbookTheme.text}`}
      >
        <LeftNavigation />

        <section className="ml-[20%] flex-1 p-10 overflow-y-auto">
          {user === null ? (
            <AuthPage />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          )}
        </section>
      </main>
    </Router>
  );
}

export default App;
