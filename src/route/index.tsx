import { Home } from "lucide-react";
import { SCREEN_PATH } from "../constants";
import { getLink } from "../utils/general";
import type { NAV_ROUTE } from "../types/custom.type";

const MAIN_ICON_SIZE = "w-10 h-7";

export const ADMIN_ROUTES: NAV_ROUTE[] = [
  {
    pathname: SCREEN_PATH.Dashboard.pathname,
    label: getLink({
      path: SCREEN_PATH.Dashboard.pathname,
      label: "Dashboard",
    }),
    key: SCREEN_PATH.Dashboard.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
  },
  // Seller Managment
  {
    pathname: SCREEN_PATH.Seller_Management.pathname,
    label: getLink({
      path: SCREEN_PATH.Seller_Management.pathname,
      label: "Seller Management",
    }),
    key: SCREEN_PATH.Seller_Management.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
    children: [
      {
        pathname: SCREEN_PATH.Ride_Partner.pathname,
        label: getLink({
          path: SCREEN_PATH.Ride_Partner.pathname,
          label: "Ride Partner",
        }),
        key: SCREEN_PATH.Ride_Partner.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
      {
        pathname: SCREEN_PATH.Category.pathname,
        label: getLink({
          path: SCREEN_PATH.Category.pathname,
          label: "Category",
        }),
        key: SCREEN_PATH.Category.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
      {
        pathname: SCREEN_PATH.Seller_Form.pathname,
        label: getLink({
          path: SCREEN_PATH.Seller_Form.pathname,
          label: "Seller Form",
        }),
        key: SCREEN_PATH.Seller_Form.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
      {
        pathname: SCREEN_PATH.Payout_Form.pathname,
        label: getLink({
          path: SCREEN_PATH.Payout_Form.pathname,
          label: "Payout Form",
        }),
        key: SCREEN_PATH.Payout_Form.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
    ],
  },
  // New Seller Request
  {
    pathname: SCREEN_PATH.New_Seller_Request.pathname,
    label: getLink({
      path: SCREEN_PATH.New_Seller_Request.pathname,
      label: "New Seller Request",
    }),
    key: SCREEN_PATH.New_Seller_Request.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
    children: [
      {
        pathname: SCREEN_PATH.order.pathname,
        label: getLink({
          path: SCREEN_PATH.order.pathname,
          label: "Order",
        }),
        key: SCREEN_PATH.order.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
      {
        pathname: SCREEN_PATH.revenue.pathname,
        label: getLink({
          path: SCREEN_PATH.revenue.pathname,
          label: "Revenue",
        }),
        key: SCREEN_PATH.revenue.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
    ]
  },
  // Top Ranking
  {
    pathname: SCREEN_PATH.top_ranking.pathname,
    label: getLink({
      path: SCREEN_PATH.top_ranking.pathname,
      label: "Top Ranking",
    }),
    key: SCREEN_PATH.top_ranking.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
     children: [
      
     
    ]
  },
  // Payments
  {
    pathname: SCREEN_PATH.payments.pathname,
    label: getLink({
      path: SCREEN_PATH.payments.pathname,
      label: "Payments",
    }),
    key: SCREEN_PATH.payments.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
     children: [
      
     
    ]
  },
  // Transaction Managment
  {
    pathname: SCREEN_PATH.transaction_management.pathname,
    label: getLink({
      path: SCREEN_PATH.transaction_management.pathname,
      label: "Transaction Managment",
    }),
    key: SCREEN_PATH.transaction_management.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
     children: [
      
     
    ]
  },
  // Remote
  {
    pathname: SCREEN_PATH.reports.pathname,
    label: getLink({
      path: SCREEN_PATH.reports.pathname,
      label: "Reports",
    }),
    key: SCREEN_PATH.reports.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
     children: [
      
     
    ]
  },
  // Admin Setting
  {
    pathname: SCREEN_PATH.admin_setting.pathname,
    label: getLink({
      path: SCREEN_PATH.admin_setting.pathname,
      label: "Admin Setting",
    }),
    key: SCREEN_PATH.admin_setting.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
    children: [
      {
        pathname: SCREEN_PATH.chat_with_partners.pathname,
        label: getLink({
          path: SCREEN_PATH.chat_with_partners.pathname,
          label: "Chat with Partners",
        }),
        key: SCREEN_PATH.chat_with_partners.key,
        icon: <Home className={MAIN_ICON_SIZE} />,
      },
    ]
  },
  // Contact Support
  {
    pathname: SCREEN_PATH.contact_support.pathname,
    label: getLink({
      path: SCREEN_PATH.contact_support.pathname,
      label: "Contact Support",
    }),
    key: SCREEN_PATH.contact_support.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
    children: [
     
    ]
  },

];
