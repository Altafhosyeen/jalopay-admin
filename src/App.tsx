import { Route, Routes } from "react-router-dom";
import { SCREEN_PATH } from "./constants";
import SellerManagment from "./pages/SellerManagment";
import TotalSeller from "./pages/TotalSellet";

const App = () => {
  return (
    <div className="min-h-[calc(100dvh-143px)] overflow-hidden">
      <Routes>
        <Route
          path={SCREEN_PATH.Dashboard.pathname}
          element={<div className="h-screen text-green-700">Dashboard</div>}
        />
        <Route
          path={SCREEN_PATH.Seller_Management.pathname}
          element={<SellerManagment />}
        > 
          {/* ✅ Make this a relative path */}
          <Route
            path="total-seller"
            element={<TotalSeller />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
