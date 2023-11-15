import { RouteObject, createBrowserRouter } from "react-router-dom";
import LayoutView from "../layout/Layout";
import InProcessView from "../views/InProcessView";
import DashboardView from "../views/dashboard/DashboardView";

const listRoute: RouteObject[] = [
  {
    path: "/",
    element: <LayoutView />,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      {
        path: "/about/visimisi",
        element: <InProcessView title="Visi Misi" />,
      },
      {
        path: "/about/pengurus",
        element: <InProcessView title="Pengurus" />,
      },
      {
        path: "/academic",
        element: <InProcessView title="Akademic" />,
      },
      {
        path: "/events",
        element: <InProcessView title="Kegiatan" />,
      },
      
      {
        path: "/alumni",
        element: <InProcessView title="Alumni" />,
      },
      
      {
        path: "/students",
        element: <InProcessView title="Mahasiswa" />,
      },
    ],
  },
];

const routes = createBrowserRouter(listRoute);
export default routes;
