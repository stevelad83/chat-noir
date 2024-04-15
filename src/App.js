import "./App.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/rings"></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
