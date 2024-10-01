"use client";

import { lazy, Suspense, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Host from "./page/Host";
import NotFound from "./page/NotFound";
import { checkServerStatus } from "./utils/functions";

import { ErrorBoundary } from 'react-error-boundary';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Host
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/remote1"
              >
                Remote 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/remote2"
              >
                Remote 2
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const moduleUrlList = [
  {
    id: 1,
    url: "http://localhost:4174/",
    path: "remote1",
  },
  {
    id: 2,
    url: "http://localhost:4175/",
    path: "remote2",
  },
];

const Remote2 = lazy(
  // @ts-ignore
  async () => import("remote2/remote-app")
);

const ErrorFallback = () => {
  return <div>Failed to load remote app. Please try again later.</div>;
};
export default () => {
  const Remote1 = lazy(async () => {
    try {
  // @ts-ignore
      return import('remote/remote-app');
    } catch (error) {
      console.error('Error loading remote1:', error);
      return <div>Failed to load remote1 app.</div>;
    }
  });
  return (
    <section>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Host />} />
              <Route path="/remote1" element={<Remote1 />} />
              <Route path="/remote2" element={<Remote2 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Router>
    </section>
  );
};
