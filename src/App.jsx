import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ProjectDetail from "./pages/ProjectDetail";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
      </Routes>
    </div>
  );
}
