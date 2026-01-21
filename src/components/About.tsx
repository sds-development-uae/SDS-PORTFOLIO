"use client";

import {
    Target,
    Zap,
    Users,
    Globe,
    TrendingUp,
    Rocket,
    Layers,
    Shield,
    Code,
    Sparkles,
    BarChart3,
    Brain,
    Cpu,
    ChevronRight,
    CheckCircle,
    Star
} from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <Target className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Our Story</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        About{" "}
                        <span className="relative">
                            Sam Digital Solutions
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        A next-generation digital growth company operating at the intersection
                        of Digital Marketing, Web3, and Technology.
                    </p>
                </div>

                {/* Who We Are Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <Users className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Who We Are</h3>
                            </div>

                            <p className="text-primary/70 mb-6 leading-relaxed">
                                Sam Digital Solutions is a next-generation digital growth company
                                operating at the intersection of Digital Marketing, Web3, and Technology.
                            </p>

                            <p className="text-primary/70 mb-8 leading-relaxed">
                                We help brands, startups, and blockchain projects launch, scale, and
                                dominate through data-driven marketing, high-performance web solutions,
                                and Web3-native growth strategies. From traditional digital ecosystems
                                to decentralized platforms, we design systems that convert attention
                                into measurable results.
                            </p>

                            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-accent" />
                                    <div>
                                        <div className="font-semibold text-primary">With our in-house Web3 growth platform</div>
                                        <div className="text-xl font-bold text-primary">TheCartel.ai</div>
                                        <div className="text-sm text-primary/60 mt-1">
                                            We go beyond services — we build infrastructure for scalable growth.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border border-primary/10">
                                <div className="text-center mb-8">
                                    <div className="text-4xl font-bold text-primary mb-2">We don't chase trends.</div>
                                    <div className="text-3xl font-bold text-accent">We engineer growth.</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <TrendingUp className="w-5 h-5" />, label: "Data-Driven" },
                                        { icon: <Rocket className="w-5 h-5" />, label: "Performance" },
                                        { icon: <Layers className="w-5 h-5" />, label: "Full-Stack" },
                                        { icon: <Shield className="w-5 h-5" />, label: "Web3 Native" }
                                    ].map((item, index) => (
                                        <div key={index} className="text-center p-4 bg-white/30 rounded-lg border border-primary/10">
                                            <div className="text-accent mb-2">
                                                {item.icon}
                                            </div>
                                            <div className="text-sm font-medium text-primary">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Do Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/5">
                                <Globe className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">What We Do</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Digital Marketing & Performance Campaigns",
                                icon: <BarChart3 className="w-5 h-5" />,
                                color: "bg-blue-50",
                                textColor: "text-blue-600"
                            },
                            {
                                title: "Web3 Marketing, Crypto & Token Launches",
                                icon: <Rocket className="w-5 h-5" />,
                                color: "bg-purple-50",
                                textColor: "text-purple-600"
                            },
                            {
                                title: "NFT & Community Growth Strategies",
                                icon: <Users className="w-5 h-5" />,
                                color: "bg-green-50",
                                textColor: "text-green-600"
                            },
                            {
                                title: "Full-Stack Web Development (Web2 + Web3)",
                                icon: <Code className="w-5 h-5" />,
                                color: "bg-orange-50",
                                textColor: "text-orange-600"
                            },
                            {
                                title: "Growth Systems & Brand Expansion",
                                icon: <TrendingUp className="w-5 h-5" />,
                                color: "bg-red-50",
                                textColor: "text-red-600"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${service.color}`}>
                                        <div className={service.textColor}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">
                                            {service.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-4">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-primary/60">Expert delivery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founders Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/5">
                                <Sparkles className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Founders</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Founder 1 */}
                        <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                                        S
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Sam</h4>
                                    <div className="text-sm font-medium text-accent mb-2">
                                        Executive & Founder
                                    </div>
                                    <p className="text-sm text-primary/70">
                                        Growth strategist with deep focus on digital marketing systems,
                                        scalable advertising, and brand expansion across both Web2 and Web3 ecosystems.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-primary/70 italic mb-4">
                                    "With a system-first mindset, I design repeatable, performance-driven
                                    strategies that help businesses scale efficiently while building long-term brand value."
                                </p>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-primary mb-3">Expertise</div>
                                <div className="flex flex-wrap gap-2">
                                    {["Digital Marketing", "Scalable Growth Systems", "Brand Growth & Expansion"].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm"
                                        >
                                            <Star className="w-3 h-3" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                        R
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Raghavendra Pratap Singh</h4>
                                    <div className="text-sm font-medium text-accent mb-2">
                                        Founder
                                    </div>
                                    <p className="text-sm text-primary/70">
                                        Web3 innovator specializing in crypto ecosystems, token launches,
                                        NFTs, and decentralized platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-primary/70 italic mb-4">
                                    "My work focuses on building sustainable Web3 ecosystems backed by
                                    strong fundamentals and real-world utility."
                                </p>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-primary mb-3">Expertise</div>
                                <div className="flex flex-wrap gap-2">
                                    {["Blockchain Architecture", "Tokenomics", "DeFi Systems", "NFT Ecosystems"].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-sm"
                                        >
                                            <Brain className="w-3 h-3" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Vision Section */}
                <div>
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 lg:p-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-white/30">
                                    <Target className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                            </div>

                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">
                                To become a global digital & Web3 growth powerhouse,
                                enabling brands and decentralized projects to scale with
                                clarity, speed, and impact.
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { icon: <Zap className="w-5 h-5" />, label: "Clarity", desc: "Transparent processes" },
                                    { icon: <Rocket className="w-5 h-5" />, label: "Speed", desc: "Rapid execution" },
                                    { icon: <TrendingUp className="w-5 h-5" />, label: "Impact", desc: "Measurable results" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center p-6 bg-white/30 rounded-xl border border-primary/10">
                                        <div className="inline-flex p-3 rounded-lg bg-primary/5 mb-4">
                                            <div className="text-accent">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="text-xl font-bold text-primary mb-2">
                                            {item.label}
                                        </div>
                                        <div className="text-sm text-primary/60">
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}