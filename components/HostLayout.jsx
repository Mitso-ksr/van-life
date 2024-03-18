import React from "react";
import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="host-layout-nav">
        <Link className="host-layou-nav element" to="/host">
          Dashboard
        </Link>
        <Link className="host-layou-nav element" to="/host/income">
          Income
        </Link>
        <Link className="host-layou-nav element" to="/host/reviews">
          Reviews
        </Link>
        <Link className="host-layou-nav element" to="/host/vans">
          Vans
        </Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default HostLayout;
