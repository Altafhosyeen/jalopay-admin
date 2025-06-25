import { Link } from "react-router-dom";

export const getLink = ({
  path,
  label,
}: {
  path?: string;
  label: string;
}): React.ReactNode => {
  return (
    <Link
      to={path ?? ""}
      className="text-[12px] text-white hover:text-gray-300 "
    >
      {label}
    </Link>
  );
};
