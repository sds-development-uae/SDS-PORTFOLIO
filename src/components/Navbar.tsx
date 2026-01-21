"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Menu,
    X,
    MessageCircle,
    ChevronRight,
    Sparkles,
    Briefcase,
    FolderOpen,
    Users,
    Phone,
} from "lucide-react";

const NAV_ITEMS = [
    { label: "Services", href: "#services", icon: <FolderOpen className="w-4 h-4" /> },
    { label: "Work", href: "#work", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Process", href: "#process", icon: <Sparkles className="w-4 h-4" /> },
    { label: "About", href: "#about", icon: <Users className="w-4 h-4" /> },
    { label: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" /> },
];

export default function Navbar() {
    const whatsappNumber = "971585533078";
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    /* Detect scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Active section observer - FIXED with proper typing */
    useEffect(() => {
        const handleActiveSection = () => {
            const sections = NAV_ITEMS.map(item => document.querySelector(item.href));
            const scrollPosition = window.scrollY + 100; // Adding offset

            let currentActive = "";

            sections.forEach((section, index) => {
                if (section && section instanceof HTMLElement) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight) {
                        currentActive = NAV_ITEMS[index].href;
                    }
                }
            });

            // If no section is found, check if we're at the top
            if (!currentActive && scrollPosition < 200) {
                setActiveSection("");
            } else if (currentActive && currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        // Initial check
        handleActiveSection();

        // Add scroll listener
        window.addEventListener("scroll", handleActiveSection);

        return () => {
            window.removeEventListener("scroll", handleActiveSection);
        };
    }, [activeSection]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 z-50 w-full">
            {/* Background */}
            <div className={`absolute inset-0 bg-background/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-lg" : ""
                }`} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main navigation */}
                <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">

                    {/* Logo - Responsive sizing */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="relative group"
                    >
                        <div className="relative">
                            {/* Mobile: Smaller logo */}
                            <div className="lg:hidden">
                                <Image
                                    src="/images/sds_brand_logov2.png"
                                    alt="Sam Digital Solutions"
                                    width={scrolled ? 100 : 110}
                                    height={scrolled ? 25 : 28}
                                    priority
                                    className="object-contain transition-all duration-300"
                                />
                            </div>

                            {/* Desktop: Full logo */}
                            <div className="hidden lg:block">
                                <Image
                                    src="/images/sds_brand_logov2.png"
                                    alt="Sam Digital Solutions"
                                    width={scrolled ? 180 : 220}
                                    height={scrolled ? 35 : 38}
                                    priority
                                    className="object-contain transition-all duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Main nav items */}
                        <div className="flex items-center gap-2">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="relative px-3 py-2 group"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`transition-all duration-300 ${activeSection === item.href
                                            ? "text-primary"
                                            : "text-primary/60 group-hover:text-primary"
                                            }`}>
                                            {item.icon}
                                        </div>
                                        <span className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.href
                                            ? "text-primary"
                                            : "text-primary/80 group-hover:text-primary"
                                            }`}>
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Active indicator */}
                                    {activeSection === item.href && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="relative ml-2">
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-accent hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp</span>
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6 text-primary" />
                        ) : (
                            <Menu className="w-6 h-6 text-primary" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute inset-x-0 top-full transition-all duration-300 ${menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                <div className="bg-background/95 backdrop-blur-lg border-t border-primary/10 shadow-xl">
                    {/* Menu items */}
                    <div className="p-4 space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${activeSection === item.href
                                    ? 'bg-primary/10 text-primary'
                                    : 'hover:bg-primary/5 text-primary/80'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${activeSection === item.href
                                        ? 'bg-primary text-highlight'
                                        : 'bg-primary/5'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-primary/40" />
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="p-4 border-t border-primary/10">
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-accent hover:shadow-lg transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}