export type NAV_ROUTE = {
  pathname: string;
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  children?: NAV_ROUTE[];
};
