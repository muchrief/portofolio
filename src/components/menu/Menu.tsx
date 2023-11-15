import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuType = {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuType[];
};

const menus: MenuType[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <i className="bi bi-house-door"></i>,
    path: "/",
  },
  {
    key: "about-us",
    label: "Tentang Kami",
    icon: <i className="bi bi-people"></i>,
    children: [
      {
        key: "vision-and-mission",
        label: "Visi dan Misi",
        icon: <i className="bi bi-person"></i>,
        path: "/about/visimisi",
      },
      {
        key: "organization",
        label: "Susunan Pengurus",
        icon: <i className="bi bi-people"></i>,
        path: "/about/pengurus",
      },
    ],
  },
  {
    key: "academic",
    label: "Akademik",
    icon: <i className="bi bi-book"></i>,
    path: "/academic",
  },
  {
    key: 'event',
    label: 'Kegiatan',
    icon: <i className="bi bi-calendar3"></i>,
    path: '/events'
  }, 
  {
    key: 'information',
    label: 'Informasi',
    icon: <i className="bi bi-info-circle"></i>,
    children: [
      {
        key: 'alumni',
        label: 'Alumni',
        icon: <i className="bi bi-mortarboard"></i>,
        path: '/alumni'
      },
      {
        key: 'student',
        label: 'Mahasiswa',
        icon: <i className="bi bi-mortarboard"></i>,
        path: '/students'
      }
    ]
  }
];

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  key: React.Key,
  label: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: Function
  // type?: 'group' = undefined,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
    className: "menu-item",
    //   type,
  } as MenuItem;
}

function HeaderMenu() {
  const navigate = useNavigate();
  const loc = useLocation();
  const [current, setCurrent] = useState(loc.pathname);

  const onClick = (e: MenuType) => {
    if (e.path) {
      setCurrent(e.path);
      navigate(e.path);
    }
  };

  const items: MenuProps["items"] = menus.map((v) => {
    return getItem(
      v.path ?? v.key,
      v.label,
      v.icon,
      v.children
        ? v.children.map((child) =>
            getItem(
              child.path ?? child.key,
              child.label,
              child.icon,
              undefined,
              child.path ? () => onClick(child) : undefined
            )
          )
        : undefined,
      v.path ? () => onClick(v) : undefined
    );
  });

  return (
    <Menu
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        width: "100%",
        background: "inherit",
        color: "white",
        display: "flex",
        justifyContent: "end",
      }}
    />
  );
}

export default HeaderMenu;
