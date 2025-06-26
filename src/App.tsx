import { Route, Routes } from "react-router-dom";
import { SCREEN_PATH } from "./constants";
import SellerManagment from "./pages/SellerManagment";
import TotalSeller from "./pages/TotalSellet";
import RidePartner from "./pages/RidePartner";
import Category from "./pages/Category";
import SellerForm from "./pages/SellerForm";
import PayoutForm from "./pages/PayoutForm";
import Order from "./pages/Order";
import Revenue from "./pages/Revenue";

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
          <Route path="total-seller" element={<TotalSeller />} />
          {/* Ride Patner */}
          <Route
            path={SCREEN_PATH.Ride_Partner.pathname}
            element={<RidePartner />}
          />
          {/* Category */}
           <Route
            path={SCREEN_PATH.Category.pathname}
            element={<Category />}
          />
          {/* SellerForm */}
           <Route
            path={SCREEN_PATH.Seller_Form.pathname}
            element={<SellerForm />}
          />
           {/* PayoutForm */}
           <Route
            path={SCREEN_PATH.Payout_Form.pathname}
            element={<PayoutForm />}
          />
        </Route>
        <Route
          path={SCREEN_PATH.New_Seller_Request.pathname}
          element={<div />}
        >
        <Route path="Order" element={<Order />} />
         {/* Revenue */}
          <Route
            path={SCREEN_PATH.revenue.pathname}
            element={<Revenue />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
