import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/main.tsx", [
    index("routes/home/index.tsx"),
    route("ideas", "./routes/ideas/index.tsx"),
    route("ideas/create", "./routes/ideas/create.tsx"),
  ]),
  route("/login", "./routes/auth/login.tsx"),
  route("/register", "./routes/auth/register.tsx"),
] satisfies RouteConfig;
