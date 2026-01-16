import Header from "@/components/common/Header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
