import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Lotteries from "./routes/Lotteries";
import Investors from "./routes/Investors";
import AddLottery from "./routes/AddLottery";
import Login from "./routes/Login";
import Settings from "./routes/Settings";
import SliderSettings from "./routes/SliderSettings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/lotteries" element={<Lotteries />} />
                  <Route
                    path="/lotteries/add-lottery"
                    element={<AddLottery />}
                  />
                  <Route path="/account-settings" element={<Settings />} />
                  <Route path="/slider-settings" element={<SliderSettings />} />
                  <Route path="/investors" element={<Investors />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
