import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
