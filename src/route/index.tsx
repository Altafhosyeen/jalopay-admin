import { Home } from "lucide-react";
import { SCREEN_PATH } from "../constants";
import { getLink } from "../utils/general";
import type { NAV_ROUTE } from "../types/custom.type";

const MAIN_ICON_SIZE = "w-10 h-7";

export const ADMIN_ROUTES: NAV_ROUTE[] = [
  {
    pathname: SCREEN_PATH.HOME.pathname,
    label: getLink({
      path: SCREEN_PATH.HOME.pathname,
      label: "Home",
    }),
    key: SCREEN_PATH.HOME.key,
    icon: <Home className={MAIN_ICON_SIZE} />,
  },
];
