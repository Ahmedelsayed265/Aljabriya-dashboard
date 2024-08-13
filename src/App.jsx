import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./routes/Home";
import Lotteries from "./routes/Lotteries";
import Investors from "./routes/Investors";
import AddLottery from "./routes/AddLottery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lotteries" element={<Lotteries />} />
          <Route path="/lotteries/add-lottery" element={<AddLottery />} />
          <Route path="/investors" element={<Investors />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
