import type { ComponentType } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const routes: Record<string, ComponentType> = {
  "/": Home,
  "/services": Services,
  "/contact": Contact,
};

function App() {
  const normalizedPath = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = routes[normalizedPath] ?? Home;

  return (
    <>
      <Header currentPath={normalizedPath} />
      <Page />
      <Footer />
    </>
  );
}

export default App;
