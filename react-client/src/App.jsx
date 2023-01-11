import Layout from "./Components/partials/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/pages/HomePage";
import "./App.css";

function App() {
  return (
    <>   
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>   
    </>
  );
}

export default App;