import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile_img from "../../assets/images/avatar.png";
import searchIcon from "../../assets/icons/search.png";
import homeIcon from "../../assets/icons/home.png";
import tvShowsIcon from "../../assets/icons/TV_shows.png";
import moviesIcon from "../../assets/icons/Movies.png";
import watchLaterIcon from "../../assets/icons/Watch_later.png";
import GenresIcon from "../../assets/icons/Genres.png";
import MenuItemComponent from "./MenuItemComponent";
import { MenuItem, SidebarNavigation } from "../../types";
import useIsDesktop from "../../hooks/useIsDesktop";

const Sidebar: React.FC = () => {
  const isDesktop = useIsDesktop();
  const [expanded, setExpanded] = useState<boolean>(false);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: searchIcon, label: "Search", path: "/search", id: 1 },
    { icon: homeIcon, label: "Home", path: "/", id: 2 },
    { icon: tvShowsIcon, label: "TV Shows", path: "/tv-shows", id: 3 },
    { icon: moviesIcon, label: "Movies", path: "/movies", id: 4 },
    { icon: GenresIcon, label: "Genres", path: "/genres", id: 5 },
    { icon: watchLaterIcon, label: "Watch Later", path: "/watch-later", id: 6 },
  ];

  const sidebarNavigationItems: SidebarNavigation[] = [
    { label: "Language", path: "/language", id: 1 },
    { label: "Get Help", path: "/getHelp", id: 2 },
    { label: "Exit", path: "", id: 3 },
  ];

  useEffect(() => {
    setExpanded(false);
  }, []);

  const isActive = (path: string): boolean => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      className={`transition-all fixed h-[93px] md:h-screen text-white bottom-0 md:top-0 left-0 z-[20] bg-[#040404] w-full    ${ expanded ? "lg:w-[22.5rem]" : "md:w-[9.813rem]"} md:pt-[11.25rem]`} 
      onMouseEnter={() => isDesktop && setExpanded(true)}
      onMouseLeave={() => isDesktop && setExpanded(false)}
    >
      {expanded && (
        <div className="flex items-center gap-[.5rem] cursor-pointer w-full rounded transition mb-6 absolute top-[4rem] z-[1] px-[24px]">
          <img
            src={profile_img}
            alt="Profile"
            className="rounded-full max-w-[5.125rem] max-h-[5.125rem]"
          />
          <span className="text-4xl font-semibold">Daniel</span>
        </div>
      )}

      {expanded && (
        <div
          className="absolute top-0 left-0 w-screen h-screen z-[0] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #040404 0%, #040404FA 21%, #04040400 100%)",
          }}
        ></div>
      )}

      <div
        className={`flex flex-col justify-end md:justify-between h-full w-full py-4  relative ${
          expanded ? "items-start" : "items-center"
        } md:max-w-[22.5rem] overflow-auto scrollbar-hidden`}
      >
        <nav
          className={`flex md:flex-col gap-4 ${
            expanded ? "w-full items-start" : "items-center"
          }`}
        >
          {menuItems.map((item) => (
            <MenuItemComponent
              key={item?.id}
              icon={item?.icon}
              label={item?.label}
              path={item?.path}
              expanded={expanded}
              isActive={isActive(item?.path)}
            />
          ))}
        </nav>

        {expanded && (
          <div className="flex flex-col gap-6 pt-6 pl-[2rem]">
            {sidebarNavigationItems.map((item) => (
              <Link
                to={item?.path}
                key={item?.id}
                className="font-bold text-[24px] leading-[42px] tracking-[4.8px] text-[#858688] uppercase font-[Tajawal]"
              >
                {item?.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
