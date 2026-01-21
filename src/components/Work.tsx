"use client";

import {
    TrendingUp,
    LineChart,
    ShoppingBag,
    Zap,
    CheckCircle,
} from "lucide-react";

const workProjects = [
    {
        id: 1,
        title: "Real Estate Lead Engine",
        results: "+312% leads, 38% lower CPL",
        description: "Full landing system + Meta ads, auto‑routing to WhatsApp/CRM, GA4 attribution.",
        tags: ["Next.js", "Meta Ads", "GA4"],
        icon: <TrendingUp className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-blue-500 to-cyan-400",
        bgColor: "bg-blue-50",
        metrics: [
            { label: "Lead Increase", value: "+312%" },
            { label: "Cost Reduction", value: "38% CPL" },
            { label: "Conversion Rate", value: "12.4%" }
        ],
        highlight: "Full-funnel automation"
    },
    {
        id: 2,
        title: "Web3 Token Dashboard",
        results: "Realtime wallet & price analytics",
        description: "Wallet connect + on‑chain charts + alerts for a Solana community.",
        tags: ["React", "Web3", "Charts"],
        icon: <LineChart className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-purple-500 to-pink-400",
        bgColor: "bg-purple-50",
        metrics: [
            { label: "Active Wallets", value: "5.2K+" },
            { label: "Real-time Updates", value: "24/7" },
            { label: "User Engagement", value: "3.8x" }
        ],
        highlight: "Blockchain analytics"
    },
    {
        id: 3,
        title: "D2C Product Launch",
        results: "From zero to first 1,000 orders",
        description: "Brand kit, storefront, email flows, and paid media to scale acquisition.",
        tags: ["Branding", "Shop", "Email"],
        icon: <ShoppingBag className="w-3 h-3 md:w-6 md:h-6" />,
        color: "from-orange-500 to-yellow-400",
        bgColor: "bg-orange-50",
        metrics: [
            { label: "Initial Orders", value: "1,000+" },
            { label: "Launch Period", value: "30 days" },
            { label: "ROAS", value: "4.2x" }
        ],
        highlight: "Full-stack launch"
    }
];

export default function Work() {
    return (
        <section id="work" className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px),
                                          linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Case Studies</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Impactful{" "}
                        <span className="relative">
                            Success Stories
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Real results from projects where we delivered measurable growth and innovation.
                    </p>
                </div>

                {/* Work Projects Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                    {workProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Project Header */}
                            <div className="relative p-2 sm:p-6 lg:p-8">
                                {/* Icon and Category */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`inline-flex p-1 sm:p-1.5 md:p-3 rounded-xl ${project.bgColor}`}>
                                        <div className={`text-accent`}>
                                            {project.icon}
                                        </div>
                                    </div>

                                    {/* Results Badge */}
                                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-1 py-1 md:px-3 md:py-1">
                                        <TrendingUp className="w-3 h-3 text-green-600" />
                                        <span className="text-xxs md:text-xs font-semibold text-green-700">
                                            {project.results.split(',')[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-sm md:text-xl font-bold text-primary mb-3">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-xs md:text-base text-primary/70 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Metrics Grid */}
                                {/* <div className="grid grid-cols-3 gap-3 mb-6">
                                    {project.metrics.map((metric, index) => (
                                        <div
                                            key={index}
                                            className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10"
                                        >
                                            <div className="text-lg font-bold text-primary mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-primary/60">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div> */}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1 px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm text-xs md:text-sm text-primary/80"
                                        >
                                            <CheckCircle className="w-3 h-3 text-accent" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlight Badge
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                                    <span className="text-sm font-medium text-primary">
                                        {project.highlight}
                                    </span>
                                    <ExternalLink className="w-3 h-3 text-primary/40 group-hover:text-accent transition-colors duration-300" />
                                </div> */}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}