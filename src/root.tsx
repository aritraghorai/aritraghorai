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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />

        <meta
          name="description"
          content="Welcome to my personal website where I showcase my professional experience, projects, and portfolio. Explore my work, skills, and journey in web development and design."
        />
        <link rel="robot" href="/robots.txt" />

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
    <div className="App min-h-screen bg-page text-textPrimary transition-colors duration-300">
      <Navbar />
      <div className="flex flex-col gap-4">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
