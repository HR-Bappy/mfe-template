"use client";

import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Host from "./page/Host";
import NotFound from "./page/NotFound";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* <h1>hello</h1>
			<h1>world</h1> */}
      <Link style={{ padding: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ padding: "10px" }} to="/remote1">
        Remote 1
      </Link>
      <Link style={{ padding: "10px" }} to="/remote2">
        Remote 2
      </Link>
    </div>
  );
};

export default () => {
  const Remote1 = lazy(
    // @ts-ignore
    async () => import("remote/remote-app")
  );
  const Remote2 = lazy(
    // @ts-ignore
    async () => import("remote2/remote-app")
  );

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Host />} />
          <Route path="/remote1" element={<Remote1 />} />
          <Route path="/remote2" element={<Remote2 />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
