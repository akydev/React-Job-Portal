import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForRecruiter from "./pages/SignUpForRecruiter";

function App() {
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpForRecruiter />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
