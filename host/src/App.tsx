"use client";

import { lazy, Suspense, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Host from "./page/Host";
import NotFound from "./page/NotFound";
import { checkServerStatus } from "./utils/functions";
import { loadRemote } from "./utils/loadRemote";

const RemoteAppLoader = ({ remoteUrl, scope, module }: any) => {
  const [RemoteApp, setRemoteApp] = useState<any>(null);

  useEffect(() => {
    const loadModule = async () => {
      try {
        const Module = await loadRemote(remoteUrl, scope, module);
        setRemoteApp(() => Module.default);
      } catch (error) {
        console.error(`Failed to load remote module from ${remoteUrl}:`, error);
        // setRemoteApp('<div>Failed to load remote app.</div>');
      }
    };

    loadModule();
  }, [remoteUrl, scope, module]);

  return RemoteApp ? <RemoteApp /> : <div>Loading remote app...</div>;
};

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
const loadRemoteComponent = async (
  remoteUrl: string,
  moduleName: string,
  fallback: JSX.Element
) => {
  const isUp = await checkServerStatus(remoteUrl);

  if (isUp) {
    try {
      // @ts-ignore: Remote module loading
      return lazy(() => import(`${moduleName}`));
    } catch (error) {
      console.error(`Failed to load module ${moduleName}`, error);
      return () => fallback;
    }
  } else {
    console.error(`Remote server is down: ${remoteUrl}`);
    return () => fallback;
  }
};

export default () => {
  // const Remote1 = lazy(
  //   // @ts-ignore
  //   async () => import("remote/remote-app")
  // );
  // const Remote2 = lazy(
  //   // @ts-ignore
  //   async () => import("remote2/remote-app")
  // );

  const [modules, setModules] = useState<any[]>([]);
  // const [Remote1, setRemote1] = useState<React.LazyExoticComponent<any> | null>(null);
  // const [Remote2, setRemote2] = useState<React.LazyExoticComponent<any> | null>(null);

  // useEffect(() => {
  //   const loadRemotes = async () => {
  //     const Remote1Component = await loadRemoteComponent(
  //       "http://localhost:4174/remoteEntry.js",
  //       "remote/remote-app",
  //       <div>Remote 1 server is down.</div>
  //     );
  //     const Remote2Component = await loadRemoteComponent(
  //       "http://localhost:4175/remoteEntry.js",
  //       "remote2/remote-app",
  //       <div>Remote 2 server is down.</div>
  //     );
  //     setModules([() => Remote1Component, () => Remote2Component]);
  //   };

  //   loadRemotes();
  // }, []);

  console.log("modules", modules);

  return (
    <section>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Host />} />
            {/* <Route path="/remote1" element={<Remote1 />} />
          <Route path="/remote2" element={<Remote2 />} /> */}
            {/* 
            {modules?.map((route, i) => (
              <Route key={i} path={route?.path} element={<route.element />} />
            ))} */}
            <RemoteAppLoader
              remoteUrl="http://localhost:4174/remoteEntry.js"
              scope="remote"
              module="./remote-app"
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </section>
  );
};
