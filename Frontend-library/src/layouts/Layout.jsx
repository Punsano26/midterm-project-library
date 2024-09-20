import { Outlet } from "react-router-dom"
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
    <div className="container mx-auto">
      <Nav />
    </div>
    <main>
        <Outlet />
      </main>
      </>
    
  );
};

export default Layout