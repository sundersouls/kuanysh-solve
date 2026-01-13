import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TablePage } from "../pages/tablePage";
import { Main } from "../pages/mainPage";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/table" element={<TablePage />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
