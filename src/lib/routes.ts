export const routes = [
  {
    name: "Home",
    href: "/",
    dark: false,
  },
  {
    name: "Discord Time Tag",
    href: "/discord-time-tag",
    dark: true,
  },
  {
    name: "SVG Path Length Calculator",
    href: "/svg-path-length-calculator",
    dark: false,
  },
];

export const isDark = (pathname: string) => {
  return routes.find((route) => route.href === pathname)?.dark;
};
