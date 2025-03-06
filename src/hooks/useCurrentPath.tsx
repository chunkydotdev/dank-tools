import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

export const useCurrentPath = () => {
  const pathname = usePathname();

  return Object.values(routes).find((route) => route.href === pathname);
};
