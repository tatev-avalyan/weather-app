import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "./redux";
import { getWeather } from "./helpers";
import Layout from "./components/Layout";
import "../src/styles/index.css";

const App = () => {
  const defaultCity = useSelector((state) => state.defaultCity);
  const dispatch = useDispatch();

  useEffect(() => {
    getWeather(defaultCity, dispatch);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
