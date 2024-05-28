import Image from "next/image";
import Icon from "@/components/Icon";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavListProps {
  name: string;
  icon: string;
  activeIcon: string;
  link: string;
}

const NavBar = () => {
  const navList: NavListProps[] = [
    {
      name: "Trade",
      icon: "trade",
      activeIcon: "trade",
      link: "/"
    },
    {
      name: "Explore",
      icon: "explore",
      activeIcon: "explore",
      link: "/explore"
    },
    {
      name: "Pools",
      icon: "pools",
      activeIcon: "pools",
      link: "/pools"
    }
  ];
  const route = useRouter();
  return (
    <div className={"bg-transparent border-b border-[#9D9D9D4D]"}>
      <div className={"max-w-[1440px] px-[40px] mx-auto h-[80px]"}>
        <div className={"flex items-center justify-between"}>
          <div>
            <Image
              src={"/images/logo.svg"}
              width={138}
              height={46}
              alt={"logo"}
            />
          </div>
          <div className={"flex items-center justify-center"}>
            {navList!.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`px-4 py-[28px] flex items-center group ${
                  route.pathname === item.link ? "active bg-navBarActiveBg" : ""
                }`}
              >
                <span className={"mr-1 -mb-[1px]"}>
                  <Icon
                    iconName={
                      route.pathname === item.link ? item.activeIcon : item.icon
                    }
                    viewClass="search !w-[13px]  fill-[#9d9d9d] [.active_&]:fill-[#FD9C3D] h-[13px] md:!w-[10px]"
                  />
                </span>
                <p
                  className={
                    "bg-[#9d9d9d] [.active_&]:bg-activeState bg-clip-text text-transparent"
                  }
                >
                  {" "}
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div>
            <p>connect wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
