export const routes = {
  home: {
    name: "Home",
    href: "/",
    dark: false,
  },
  discordTimestamp: {
    name: "Discord Timestamp",
    href: "/discord-timestamp",
    dark: true,
  },
  svgPathLengthCalculator: {
    name: "SVG Path Length Calculator",
    href: "/svg-path-length-calculator",
    dark: false,
  },
  simplePoll: {
    name: "Simple Poll",
    href: "/simple-poll",
    dark: false,
  },
};

// Helper function to get tool routes (all except home)
export const getToolRoutes = () =>
  Object.values(routes).filter((route) => route.name !== "Home");

export const isDark = (pathname: string) => {
  return Object.values(routes).find((route) => route.href === pathname)?.dark;
};
