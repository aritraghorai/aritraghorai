import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("/about", "routes/about.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/skills", "routes/skills.tsx"),
  route("/projects", "routes/projects.tsx"),
] satisfies RouteConfig;
