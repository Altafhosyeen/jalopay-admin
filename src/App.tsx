import { Route, Routes } from "react-router-dom";
import { SCREEN_PATH } from "./constants";
import SellerManagment from "./pages/SellerManagment";

const App = () => {
  return (
    <div className="min-h-[calc(100dvh-143px)] overflow-hidden">
      <Routes>
        {/* Define your routes here */}
        <Route
          path={SCREEN_PATH.Dashboard.pathname}
          element={<div>Dashboard</div>}
        />
        <Route
          path={SCREEN_PATH.Seller_Management.pathname}
          element={<SellerManagment />}
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
