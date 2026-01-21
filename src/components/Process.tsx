"use client";

import {
    Search,
    Palette,
    Code,
    Rocket,
    TrendingUp,
    Calendar,
    Target,
    CheckCircle,
    Zap,
    Clock,
    Users,
    BarChart3,
    FileText,
    ChevronRight
} from "lucide-react";

const processSteps = [
    {
        id: 1,
        title: "Discover",
        subtitle: "35‑min strategy call → goals, budget, timeline",
        description: "We start by understanding your business objectives, target audience, and success metrics. This collaborative session sets the foundation for everything that follows.",
        icon: <Search className="w-5 h-5" />,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        duration: "1-2 days",
        deliverables: ["Project brief", "Timeline", "Budget estimate", "Success metrics"]
    },
    {
        id: 2,
        title: "Design",
        subtitle: "Wireframes, copy, and visual system in Figma",
        description: "Creating user-centered designs that combine aesthetics with functionality. We develop wireframes, prototypes, and final designs that align with your brand identity.",
        icon: <Palette className="w-5 h-5" />,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        duration: "3-5 days",
        deliverables: ["Wireframes", "Visual design", "Content strategy", "Design system"]
    },
    {
        id: 3,
        title: "Build",
        subtitle: "Next.js build, QA, speed/SEO pass, pixel/GA4 setup",
        description: "Our development team brings designs to life with clean, optimized code. We implement best practices for performance, SEO, and analytics integration.",
        icon: <Code className="w-5 h-5" />,
        color: "text-green-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        duration: "2-4 weeks",
        deliverables: ["Development", "Testing", "Optimization", "Analytics setup"]
    },
    {
        id: 4,
        title: "Launch",
        subtitle: "Vercel deploy, domain, tracking, CRM/WhatsApp hooks",
        description: "Seamless deployment with proper tracking and integrations. We ensure everything works perfectly before going live and setting up all necessary connections.",
        icon: <Rocket className="w-5 h-5" />,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        duration: "2-3 days",
        deliverables: ["Deployment", "Testing", "Tracking setup", "CRM integration"]
    },
    {
        id: 5,
        title: "Scale",
        subtitle: "Ads, CRO tests, content calendar, monthly reporting",
        description: "Continuous optimization and growth strategies. We analyze performance data and implement improvements to maximize your ROI and business impact.",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        duration: "Ongoing",
        deliverables: ["Performance marketing", "A/B testing", "Content strategy", "Monthly reports"]
    }
];

export default function Process() {
    return (
        <section id="process" className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <Target className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Our Workflow</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Clear &{" "}
                        <span className="relative">
                            Structured Process
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        A transparent, step-by-step approach that ensures quality and efficiency
                        from discovery to scaling.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/20 transform lg:-translate-x-1/2"></div>

                    {/* Process Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={step.id}
                                    className="relative"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-background ${step.bgColor} shadow-lg`}>
                                            <div className={`${step.color}`}>
                                                {step.icon}
                                            </div>
                                            {/* Step Number Badge */}
                                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className={`
                                        relative lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right lg:ml-auto' : 'lg:pl-12'}
                                        ${index === 0 ? 'pt-0' : ''}
                                    `}>
                                        {/* Card */}
                                        <div className={`
                                            bg-white/50 backdrop-blur-sm border ${step.borderColor} rounded-xl p-6 
                                            hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
                                            ${isEven ? 'lg:mr-6' : 'lg:ml-6'}
                                        `}>
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={isEven ? 'lg:order-2 lg:text-right' : ''}>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className={`p-1.5 rounded-lg ${step.bgColor}`}>
                                                            <div className={step.color}>
                                                                {step.icon}
                                                            </div>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-primary">
                                                            {step.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-sm font-medium text-accent">
                                                        {step.subtitle}
                                                    </p>
                                                </div>

                                                {/* Duration Badge */}
                                                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${step.bgColor} ${step.color} ${isEven ? 'lg:order-1' : ''}`}>
                                                    <Clock className="w-3 h-3" />
                                                    {step.duration}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-primary/70 mb-6 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Deliverables */}
                                            <div className={isEven ? 'lg:text-left' : ''}>
                                                <div className="text-sm font-semibold text-primary mb-3">
                                                    Key Deliverables:
                                                </div>
                                                <div className="space-y-2">
                                                    {step.deliverables.map((item, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`flex items-center gap-2 ${isEven ? 'lg:flex-row-reverse lg:justify-end' : ''}`}
                                                        >
                                                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                                            <span className="text-sm text-primary/80">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Arrow Indicator */}
                                            <div className={`absolute top-1/2 transform -translate-y-1/2 hidden lg:block ${isEven
                                                ? '-right-6 text-blue-500'
                                                : '-left-6 text-purple-500 rotate-180'
                                                }`}>
                                                <ChevronRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Benefits */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Why Our Timeline Works
                            </h3>
                            <p className="text-primary/70 max-w-2xl mx-auto">
                                A proven methodology that balances speed with quality, ensuring
                                your project delivers maximum impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <Calendar className="w-5 h-5" />,
                                    title: "Predictable",
                                    description: "Clear timelines and milestones"
                                },
                                {
                                    icon: <Users className="w-5 h-5" />,
                                    title: "Collaborative",
                                    description: "Regular check-ins and updates"
                                },
                                {
                                    icon: <BarChart3 className="w-5 h-5" />,
                                    title: "Measurable",
                                    description: "Track progress with KPIs"
                                },
                                {
                                    icon: <FileText className="w-5 h-5" />,
                                    title: "Transparent",
                                    description: "Full visibility into process"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-white/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-accent/30 transition-colors duration-300"
                                >
                                    <div className="inline-flex p-3 rounded-lg bg-primary/5 mb-4">
                                        <div className="text-accent">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-primary mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-primary/60">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                        <div className="text-left sm:text-left">
                            <h4 className="text-lg font-bold text-primary mb-2">
                                Ready to Start Your Project?
                            </h4>
                            <p className="text-primary/70">
                                Let's begin with a discovery call to outline your goals and timeline.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-accent hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                            <span>Schedule Discovery Call</span>
                            <Zap className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}