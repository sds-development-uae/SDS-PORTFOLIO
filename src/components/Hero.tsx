"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Zap, ChevronRight, Globe, Target, Rocket, Shield, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 lg:pt-24">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0c2746]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f47a1f]/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px),
                                          linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}>
                </div>

                {/* Animated dots */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* LEFT CONTENT - Modified */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 lg:mb-8">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Web3 Pioneers & Growth Experts
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            <span className="text-primary">Transform Your</span>
                            <span className="block mt-2">
                                <span className="relative">
                                    <span className="text-primary/80">Digital Presence</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                                </span>
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-4 text-lg sm:text-xl text-primary/60">
                            From Startup to Scale-up in Web2 & Web3
                        </p>

                        {/* Description */}
                        <p className="mt-6 text-base sm:text-lg text-primary/70 max-w-xl leading-relaxed">
                            We specialize in accelerating growth for innovative companies through
                            <span className="font-semibold text-primary"> integrated digital strategies</span>,
                            <span className="font-semibold text-accent"> cutting-edge Web3 solutions</span>, and
                            <span className="font-semibold text-primary"> data-driven marketing</span>.
                            Your success is our mission.
                        </p>

                        {/* Key Benefits */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <Target className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Precision Targeting</h3>
                                    <p className="text-sm text-primary/60 mt-1">AI-driven audience segmentation</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <Rocket className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Rapid Deployment</h3>
                                    <p className="text-sm text-primary/60 mt-1">Launch campaigns in days, not weeks</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <Shield className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Blockchain Security</h3>
                                    <p className="text-sm text-primary/60 mt-1">Enterprise-grade Web3 protection</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <TrendingUp className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Measurable ROI</h3>
                                    <p className="text-sm text-primary/60 mt-1">Transparent performance tracking</p>
                                </div>
                            </div>
                        </div>

                        {/* Powered by */}
                        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-white/10">
                                        <Globe className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-primary">Powered by</div>
                                        <div className="text-lg font-bold text-primary">TheCartel.ai</div>
                                    </div>
                                </div>
                                <div className="text-xs text-primary/50 text-right hidden sm:block">
                                    Our proprietary<br />growth platform
                                </div>
                            </div>
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-accent hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <span>Start Free Consultation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="https://thecartel.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary/30 bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary hover:bg-primary hover:text-highlight transition-all duration-300"
                            >
                                <span>See Our Platform</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Trust Indicator */}
                        <div className="mt-6 flex items-center gap-2 text-xs text-primary/50">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>Trusted by startups & enterprises worldwide</span>
                        </div>
                    </div>

                    {/* RIGHT IMAGE - 16:9 Aspect Ratio Container */}
                    <div className="relative w-full">
                        {/* Main 16:9 Container */}
                        <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
                            {/* Background container with rounded corners */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl lg:rounded-3xl overflow-hidden border border-primary/10">
                                {/* Floating background elements */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/10 rounded-full blur-xl"></div>
                                <div className="absolute bottom-6 left-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>

                                {/* Image container - maintains 16:9 */}
                                <div className="relative w-full h-full p-4 sm:p-6 lg:p-8">
                                    <Image
                                        src="/images/hero_image.png"
                                        alt="Web3, Crypto & Digital Marketing Visualization"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                        style={{ filter: 'drop-shadow(0 20px 40px rgba(12, 39, 70, 0.3))' }}
                                    />
                                </div>

                                {/* Decorative border */}
                                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-primary/10"></div>
                            </div>
                        </div>

                        {/* Optional: Add some descriptive text below image on mobile */}
                        <div className="mt-4 text-center lg:text-left">
                            <p className="text-sm text-primary/60 font-medium">
                                Comprehensive Digital & Web3 Solutions
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-xs text-primary/50">Marketing</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-xs text-primary/50">Development</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-primary/50">Web3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-primary/50 animate-bounce">Explore More</span>
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </div>
        </section>
    );
}