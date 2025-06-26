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
import { SCREEN_PATH } from "./constants";
import TopRanking from "./pages/TopRanking";
import Payments from "./pages/Payments";
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import Adminsetting from "./pages/AdminSetting";
import ChatPartner from "./pages/ChatPartner";
import ContactSupport from "./pages/ContactSupport";
import Dashboard from "./pages/Daashoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="dashboard" element={<Dashboard/>} />

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

        <Route path={SCREEN_PATH.order.pathname} element={<Order />} />
        <Route path={SCREEN_PATH.revenue.pathname} element={<Revenue />} />
        <Route path={SCREEN_PATH.top_ranking.pathname} element={<TopRanking />} />
        <Route path={SCREEN_PATH.payments.pathname} element={<Payments />} />
        <Route path={SCREEN_PATH.transaction_management.pathname} element={<Transaction />} />
        <Route path={SCREEN_PATH.reports.pathname} element={<Report />} />
        <Route path={SCREEN_PATH.admin_setting.pathname} element={<Adminsetting />} />
        <Route path={SCREEN_PATH.chat_with_partners.pathname} element={<ChatPartner />} />
        <Route path={SCREEN_PATH.contact_support.pathname} element={<ContactSupport />} />
      </Route>
    </Routes>
  );
};

export default App;
