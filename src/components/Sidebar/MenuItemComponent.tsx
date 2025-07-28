import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: string;
  label: string;
  path: string;
  expanded: boolean;
  isActive: boolean;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  icon,
  label,
  path,
  expanded,
  isActive,
}) => {
  const activeClasses = isActive
    ? "text-white shadow-lg bg-[#3b486d] font-bold"
    : "hover:bg-[#3b486d]";
 
    return (
    <Link
      to={path}
      className={`flex items-center cursor-pointer rounded  transition ${activeClasses} ${
        expanded
          ? "w-[25px] h-[25px]  gap-[3.25rem] w-full py-9 px-4 rounded-xl"
          : "w-full h-full justify-center px-[1rem] py-[1rem]  rounded-[50%] lg:p-[1.65rem] [@media(max-width:720px)]:p-[0.5rem] "
      }`}
      title={!expanded ? label : undefined}
    >
      <img
        src={icon}
        alt={label}
        className={` ${expanded ? "w-[25px] h-[25px]" : "max-width:unset"}`}
      />
      {expanded && <span className="text-4xl">{label}</span>}
    </Link>
  );
};

export default MenuItemComponent;
