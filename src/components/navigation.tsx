"use client";

import { useCurrentPath } from "@/hooks/useCurrentPath";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const menuItemVariants = {
  closed: {
    y: 20,
    opacity: 0,
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = useCurrentPath();

  const isDark = currentPath?.dark;
  const textColor = isDark ? "text-zinc-400" : "text-zinc-500";
  const activeTextColor = isDark ? "text-white" : "text-zinc-900";
  const hoverTextColor = isDark ? "hover:text-white" : "hover:text-black";

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isHome = currentPath?.name === "Home";
  if (isHome) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image
              src={isDark ? "/logo-dark.svg" : "/logo.svg"}
              alt="Logo"
              width={113}
              height={30}
              className="h-8"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((item) => {
              const isActive = currentPath?.href === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    textColor,
                    isActive ? activeTextColor : hoverTextColor
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.9 }}
          >
            <IconMenu2 className={activeTextColor} />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white dark:bg-black md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center h-16 px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      <Image
                        src={isDark ? "/logo-dark.svg" : "/logo.svg"}
                        alt="Logo"
                        width={113}
                        height={30}
                        className="h-8"
                      />
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2"
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <IconX className={activeTextColor} />
                  </motion.button>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 space-y-6">
                  {routes.map((item, i) => {
                    const isActive = currentPath?.href === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={menuItemVariants}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "px-3 py-2 text-lg font-medium rounded-md transition-colors",
                            textColor,
                            isActive ? activeTextColor : hoverTextColor
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
