"use client";

import {
    Code,
    TrendingUp,
    Search,
    Palette,
    Wallet,
    Users,
    CheckCircle,
    ArrowRight,
    Zap,
    Globe,
    Smartphone,
    Target,
    Shield,
    BarChart3,
    Sparkles
} from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web & App Development",
        description: "Next.js/React builds, fast APIs, Firebase/Node backends, secure auth & payments. From marketing sites to custom dashboards.",
        icon: <Code className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-blue-500 to-cyan-400",
        bgColor: "bg-blue-50",
        features: [
            "Next.js 14 + React 18",
            "Firebase/Node/Express",
            "Razorpay/Stripe/PayPal"
        ],
        highlight: "Full-stack development"
    },
    {
        id: 2,
        title: "Performance Marketing",
        description: "Full‑funnel Meta/Instagram + Google Ads with landing pages, lead routing, and analytics that prove ROI.",
        icon: <TrendingUp className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-green-500 to-emerald-400",
        bgColor: "bg-green-50",
        features: [
            "Meta/Google Ads",
            "CRO landing pages",
            "CRM & WhatsApp routing"
        ],
        highlight: "ROI-driven campaigns"
    },
    {
        id: 3,
        title: "SEO & Content",
        description: "Technical SEO + content engine to rank and convert. Schema, sitemaps, speed, and story.",
        icon: <Search className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-purple-500 to-pink-400",
        bgColor: "bg-purple-50",
        features: [
            "Technical SEO",
            "Keyword content plans",
            "Schema & Core Web Vitals"
        ],
        highlight: "Sustainable growth"
    },
    {
        id: 4,
        title: "Branding & Creative",
        description: "Logos, brand kits, social packs, and high‑impact ad creatives aligned to your funnel.",
        icon: <Palette className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-orange-500 to-yellow-400",
        bgColor: "bg-orange-50",
        features: [
            "Logo & identity",
            "Ad creatives",
            "Social kits"
        ],
        highlight: "Visual storytelling"
    },
    {
        id: 5,
        title: "Web3 / Crypto Integrations",
        description: "Wallet connect, token dashboards, on‑chain data, and community landing pages when you need crypto‑native flows.",
        icon: <Wallet className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-violet-500 to-purple-400",
        bgColor: "bg-violet-50",
        features: [
            "Phantom/Metamask connect",
            "DexScreener embeds",
            "Analytics"
        ],
        highlight: "Blockchain-ready"
    },
    {
        id: 6,
        title: "Dedicated Team (Out‑Staffing)",
        description: "On‑demand dev/design/ads talent managed by us, embedded with your team.",
        icon: <Users className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-indigo-500 to-blue-400",
        bgColor: "bg-indigo-50",
        features: [
            "Monthly retainers",
            "SLA & reporting",
            "Flexible scope"
        ],
        highlight: "Scalable resources"
    }
];

export default function Services() {
    return (
        <section id="services" className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <Zap className="w-2 h-2 md:w-4 md:h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Our Expertise</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Comprehensive Digital{" "}
                        <span className="relative">
                            Solutions
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        End-to-end services to build, grow, and scale your digital presence
                        across Web2 and Web3 ecosystems.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-2 sm:p-6 md:p-8 lg:p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Card Background Pattern */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            </div>

                            {/* Service Icon */}
                            <div className="relative z-10">
                                <div className={`inline-flex p-1 sm:p-2 md:p-3 rounded-xl ${service.bgColor} mb-6`}>
                                    <div className={`text-accent`}>
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Service Title & Description */}
                            <div className="relative z-10 mb-6">
                                <h3 className="text-sm md:text-xl font-bold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-base text-primary/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="relative z-10 mb-8">
                                <div className="space-y-3">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <CheckCircle className="w-2 h-2 md:w-4 md:h-4 text-green-500" />
                                            </div>
                                            <span className="text-xxs md:text-sm text-primary/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Highlight Badge */}
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 p-1 sm:p-2 md:px-3 md:py-1.5 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm">
                                    <span className="text-xxs md:text-xs font-medium text-primary">
                                        {service.highlight}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Indicator */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-accent transition-colors duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 lg:mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
                        <div className="text-left">
                            <h3 className="text-sm md:text-xl font-bold text-primary mb-2">
                                Need a Custom Solution?
                            </h3>
                            <p className="text-xs md:text-sm text-primary/70">
                                Let's discuss how we can tailor our services to meet your specific requirements.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-accent hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="w-2 h-2 md:w-4 md:h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </section>
    );
}