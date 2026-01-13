import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Table } from "./pages/tablePage.jsx";
import { Main } from "./pages/mainPage.jsx";
import { store } from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<Table />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
