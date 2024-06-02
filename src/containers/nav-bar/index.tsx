import Image from "next/image";
import Icon from "@/components/Icon";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/base/buttons";
import React, { useState } from "react";
import WalletModal from "@/containers/nav-bar/wallet-modal";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { stringTruncate } from "@/utils/number";
import SideDrawer from "@/containers/nav-bar/side-drawer";

interface NavListProps {
  name: string;
  icon: string;
  activeIcon: string;
  pageName: string;
  link: string;
}

const getActiveNav = (value: string, pathName: string) => {
  console.log(value, pathName, "getActiveNav");
  if (value === "/" && value === pathName) {
    return true;
  } else if (value !== "/" && pathName.includes(value)) {
    return true;
  }
  return false;
};

const NavBar = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletInfoSlide, setWalletInfoSlide] = useState(false);
  const { walletData } = useAppStore(
    useShallow((state) => ({
      walletData: state.walletData.walletInfo
    }))
  );
  const navList: NavListProps[] = [
    {
      name: "Trade",
      icon: "trade",
      activeIcon: "trade",
      pageName: "trade",
      link: "/"
    },
    {
      name: "Explore",
      icon: "explore",
      activeIcon: "explore",
      pageName: "explore",
      link: "/explore"
    },
    {
      name: "Pools",
      icon: "pools",
      activeIcon: "pools",
      pageName: "pools",
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
                  getActiveNav(item.link, route.pathname)
                    ? "active bg-navBarActiveBg"
                    : ""
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
            <Button
              className={`w-full md:py-2 md:text-sm flex items-center justify-center`}
              type="secondary"
              size="medium"
              disabled={false}
              content={
                walletData.walletConnection
                  ? stringTruncate(walletData.account, 6)
                  : "Connect Wallet"
              }
              onClick={
                walletData.walletConnection
                  ? () => {
                      setWalletInfoSlide(true);
                    }
                  : () => {
                      setShowWalletModal(true);
                    }
              }
            />
          </div>
        </div>
      </div>
      {showWalletModal ? (
        <WalletModal
          onClose={() => {
            setShowWalletModal(false);
          }}
        />
      ) : null}
      <div
        className={`${
          walletInfoSlide ? "transform-none" : "translate-x-full"
        } fixed top-0 right-0 z-40 w-[300px] h-screen transition-transform bg-[#000000]
               menu-open
               `}
        id="navbarCollapse"
      >
        <div className={"px-4 py-4 flex items-center justify-between"}>
          <Button
            className={`w-[200px] md:py-2 md:text-sm flex items-center justify-center`}
            type="secondary"
            size="medium"
            disabled={false}
            content={
              walletData.walletConnection
                ? stringTruncate(walletData.account, 6)
                : "Connect Wallet"
            }
            onClick={
              walletData.walletConnection
                ? () => {
                    setWalletInfoSlide(true);
                  }
                : () => {
                    setShowWalletModal(true);
                  }
            }
          />
          <p
            className={"text-white-600 cursor-pointer"}
            onClick={() => {
              setWalletInfoSlide(false);
            }}
          >
            <Icon
              iconName={"close"}
              viewClass="search !w-[13px]  fill-[#9d9d9d] h-[13px]"
            />
          </p>
        </div>

        <SideDrawer />
      </div>
    </div>
  );
};
export default NavBar;
