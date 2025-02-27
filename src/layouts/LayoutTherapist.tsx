import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MenuUnfoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";

interface SidebarDataType {
  icon: React.ElementType;
  heading: string;
  href: string;
  children?: SidebarDataType[];
}

const SidebarData: SidebarDataType[] = [
  {
    icon: ShoppingCartOutlined,
    heading: "Thống kê",
    href: "/dashboardTP",
  },
  {
    icon: MenuUnfoldOutlined,
    heading: "Lịch làm việc",
    href: "/calendar-appointment",
  },
  {
    icon: MenuUnfoldOutlined,
    heading: "Lịch hẹn",
    href: "/admin/lichhen",
  },
  {
    icon: FaCircleUser,
    heading: "Profile",
    href: "/admin/profile",
  },
  {
    icon: MenuUnfoldOutlined,
    heading: "Cài đặt",
    href: "/admin/caidat",
  },
];

const LayoutTherapist: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>(window.location.pathname);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const handleNavigation = (href: string) => {
    setActive(href);
    navigate(href);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="h-full w-64 bg-[#325343] shadow-lg flex flex-col">
        {/* Logo */}
        <div className="mx-auto px-6 mt-12">
          <img
            src="/src/assets/134.png"
            alt="MarriTalk Logo"
            className="h-24"
          />
        </div>

        {/* Danh sách menu */}
        <nav className="flex-1 px-6 py-6">
          <ul className="space-y-2">
            {SidebarData.map((item) => (
              <li key={item.heading}>
                <div
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center text-sm font-medium rounded-lg px-4 py-2 cursor-pointer ${
                    active === item.href
                      ? "bg-[#EDEBDF] text-[#325343]"
                      : "text-white hover:text-[#325343] hover:bg-[#EDEBDF]"
                  }`}
                >
                  <div className="mr-3 text-lg">
                    <item.icon />
                  </div>
                  {item.heading}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Đăng xuất */}
        <div className="px-4 py-6">
          <button
            className="flex items-center text-sm font-medium text-white hover:text-[#325343] hover:bg-[#EDEBDF] rounded-lg px-4 py-2 w-full"
            onClick={() => navigate("/")}
          >
            <div className="mr-3 text-lg"></div>
            Đăng xuất
          </button>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex-1  ">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutTherapist;
