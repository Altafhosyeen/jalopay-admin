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
];
