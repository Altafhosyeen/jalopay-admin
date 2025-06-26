import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
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
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="dashboard" element={<div>Dashboard</div>} />

        {/* All these routes render inside BaseLayout, not inside SellerManagment */}
        <Route path="seller-management" element={<SellerManagment />} />
        <Route
          path="seller-management/total-seller"
          element={<TotalSeller />}
        />
        <Route path="/seller-management/category" element={<Category />} />
        <Route
          path="seller-management/ride-partner"
          element={<RidePartner />}
        />
        <Route path="seller-management/seller-form" element={<SellerForm />} />
        <Route path="seller-management/payout-form" element={<PayoutForm />} />

        <Route path="order" element={<Order />} />
        <Route path="revenue" element={<Revenue />} />
      </Route>
    </Routes>
  );
};

export default App;
