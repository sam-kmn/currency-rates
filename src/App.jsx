import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rates from "./routes/Rates";
import Available from "./routes/Available";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rates />} />
        <Route path="/available" element={<Available />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
