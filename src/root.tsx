import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./index.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aritra Ghorai</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <div className="App dark:bg-myColor bg-white">
      <Navbar />
      <div className="flex flex-col gap-4">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
