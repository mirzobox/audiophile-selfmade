import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main className="grow">
      <Outlet />
    </main>
  );
}

export default MainContent;
