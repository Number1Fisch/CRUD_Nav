import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ListPage from "./components/pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/taskList" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
