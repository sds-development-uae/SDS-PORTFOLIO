"use client";

import Image from "next/image";
import {
    Heart,
    MessageCircle,
    Mail,
    MapPin,
    Phone,
    Globe,
    TrendingUp,
    Search,
    Briefcase,
    Users,
    Sparkles,
    ArrowUpRight,
    ChevronRight
} from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-background text-primary overflow-hidden border-t border-primary/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '20px 100%'
                }}></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '100% 20px'
                }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/images/sds_brand_logov2.png"
                                alt="Sam Digital Solutions"
                                width={180}
                                height={45}
                                className="object-contain"
                            />
                        </div>

                        <p className="text-primary/70 mb-6 leading-relaxed">
                            Dubai's full-stack web & growth studio. We build websites that
                            convert and campaigns that scale.
                        </p>

                        {/* Contact Quick Links */}
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/971585533078"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp: +971 58 553 3078</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a
                                href="mailto:connect@samdigitalsolutions.digital"
                                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                            >
                                <Mail className="w-4 h-4" />
                                <span>connect@samdigitalsolutions.digital</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <Globe className="w-3 h-3" />
                                    <span>Web Development</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <TrendingUp className="w-3 h-3" />
                                    <span>Performance Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <Search className="w-3 h-3" />
                                    <span>SEO & Content</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/971585533078"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:connect@samdigitalsolutions.digital"
                                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Email</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>

                        {/* Address */}
                        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary/60 mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-sm font-medium text-primary">Dubai Office</div>
                                    <div className="text-xs text-primary/60 mt-1">
                                        Mazaya Business Avenue BB2, Dubai
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <div className="text-primary/70 text-sm">
                            © {new Date().getFullYear()} Sam Digital Solutions. All rights reserved.
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-xs text-primary/60">
                            <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3 text-red-400" />
                                <span>Made with love in Dubai</span>
                            </div>
                            <div className="hidden md:block">•</div>
                            <div>Trade License No: 39987</div>
                            <div className="hidden md:block">•</div>
                            <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                <span>+971 58 553 3078</span>
                            </div>
                        </div>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <span className="text-sm">Back to top</span>
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Quick Contact Bar */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://wa.me/971585533078"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-600 transition-colors duration-300 border border-green-500/20 hover:border-green-500/30"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Chat on WhatsApp</span>
                    </a>

                    <a
                        href="mailto:connect@samdigitalsolutions.digital"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 transition-colors duration-300 border border-blue-500/20 hover:border-blue-500/30"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Send Email</span>
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-colors duration-300 border border-accent/20 hover:border-accent/30"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Get Quote</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}