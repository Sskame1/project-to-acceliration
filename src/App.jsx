import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Authpage } from "./pages/authpage";
import { Header } from "./components/header";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Courses } from "./pages/courses";


function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/auth" element={ <Authpage /> } />
      <Route path="*" element={ <NotFoundPage /> } />
      <Route path="/courses" element={ <Courses /> } />
    </Routes>
    </div>
  );
}

export default App;
