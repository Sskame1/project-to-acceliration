import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Authpage } from "./pages/authpage";
import { Header } from "./components/header";


function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/auth" element={ <Authpage /> } />
    </Routes>
    </div>
  );
}

export default App;
