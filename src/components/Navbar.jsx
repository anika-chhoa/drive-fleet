"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Car, LayoutDashboard, List, LogOut, Menu, Plus } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Explore Cars", href: "/explore" },
    { label: "Add Car", href: "/add-car" },
    { label: "My Bookings", href: "/bookings" },
  ];

  const handleLogout = async () => {
    setProfileOpen(false);
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#031427]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-[#d8c3ad]"
            >
              <Menu />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="px-2 py-1 bg-[#F59E0B] rounded-xl">
                <Car className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-[#ffc174]">
                DriveFleet
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium relative ${
                    isActive
                      ? "text-[#ffc174]"
                      : "text-[#d8c3ad] hover:text-[#ffc174]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#ffc174] transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {!user ? (
              <Link href="/login">
                  <button className="bg-gradient-to-b from-[#FDB813] to-[#FF8C00] text-[#000f21] font-bold px-4 py-[5px] rounded-full">
                    Login
                  </button>
                </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center"
                >
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt="John Doe"
                      src={user?.image}
                      className="object-cover"
                    />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                  </Avatar>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-12 w-56 bg-[#0b1c30] border border-white/10 rounded-2xl shadow-xl flex flex-col py-2">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-sm font-bold text-white">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>

                    <Link
                      href="/add-car"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-2 text-sm hover:bg-white/5 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Car
                    </Link>

                    <Link
                      href="/bookings"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-2 text-sm hover:bg-white/5 flex items-center gap-2"
                    >
                      <List className="w-4 h-4" />
                      My Bookings
                    </Link>

                    <Link
                      href="/my-cars"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-2 text-sm hover:bg-white/5 flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[280px] z-50 md:hidden
        bg-[#0b1c30] border-r border-white/10
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-5">
          <div className="text-[#ffc174] font-bold text-xl mb-6">
            DriveFleet
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl ${
                    isActive
                      ? "bg-[#ffc174]/10 text-[#ffc174]"
                      : "text-[#d8c3ad] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}
