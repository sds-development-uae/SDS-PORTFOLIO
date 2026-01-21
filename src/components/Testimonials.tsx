"use client";

import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    TrendingUp,
    MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        quote: "Sam Digital Solutions transformed our lead generation completely. The new landing page and ad campaigns increased our qualified leads by over 300% while reducing our cost per lead significantly.",
        author: "Ahmed Al-Rashid",
        role: "CEO at Dubai Properties Group",
        company: "Dubai Properties Group",
        category: "Real Estate",
        results: "+300% leads",
        rating: 5,
        avatarColor: "from-blue-500 to-cyan-400"
    },
    {
        id: 2,
        quote: "The Web3 dashboard they built for us is incredible. Real-time analytics, seamless wallet integration, and a beautiful interface that our users love. Highly recommend their technical expertise.",
        author: "Sarah Chen",
        role: "Founder at CryptoVault",
        company: "CryptoVault",
        category: "Web3/Crypto",
        results: "Seamless integration",
        rating: 5,
        avatarColor: "from-purple-500 to-pink-400"
    },
    {
        id: 3,
        quote: "Our D2C launch would not have been possible without Sam Digital Solutions. From branding to storefront to ad funnels, everything was handled with precision. We hit 1,000 orders in the first month alone.",
        author: "Rahul Mehta",
        role: "Co-Founder at FreshCart UAE",
        company: "FreshCart UAE",
        category: "D2C E-commerce",
        results: "1,000+ orders",
        rating: 5,
        avatarColor: "from-green-500 to-emerald-400"
    },
    {
        id: 4,
        quote: "Partnering with Sam Digital Solutions gave us the tech edge we needed. Their SEO and content strategies pushed us to the top of search results in weeks, driving organic growth and visibility.",
        author: "Laura Williams",
        role: "Head of Marketing at GreenHomes Realty",
        company: "GreenHomes Realty",
        category: "Real Estate",
        results: "Top rankings",
        rating: 5,
        avatarColor: "from-orange-500 to-yellow-400"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay]);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoplay(false);
    };

    const goToTestimonial = (index: number) => {
        setActiveIndex(index);
        setAutoplay(false);
    };

    return (
        <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

                {/* Quote Pattern */}
                <div className="absolute top-20 right-20 opacity-5">
                    <Quote className="w-48 h-48 text-primary" />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Client Stories</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Trusted by{" "}
                        <span className="relative">
                            Industry Leaders
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say about
                        working with us.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Active Testimonial Card */}
                    <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 lg:p-12 shadow-lg">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-primary/10">
                            <Quote className="w-12 h-12" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="mb-8">
                            <p className="text-xl lg:text-2xl text-primary/80 leading-relaxed italic">
                                "{testimonials[activeIndex].quote}"
                            </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="text-lg font-bold text-primary">
                                    {testimonials[activeIndex].author}
                                </div>
                                <div className="text-sm text-accent font-medium">
                                    {testimonials[activeIndex].role}
                                </div>
                                <div className="text-sm text-primary/60">
                                    {testimonials[activeIndex].company}
                                </div>
                            </div>
                        </div>

                        {/* Results Badge */}
                        <div className="absolute bottom-6 right-6">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-semibold text-green-700">
                                    {testimonials[activeIndex].results}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-primary/10 text-primary hover:bg-primary hover:text-accent transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-primary/30'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-primary/10 text-primary hover:bg-primary hover:text-accent transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 max-w-3xl mx-auto">
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-primary mb-2">
                                Ready to join our success stories?
                            </h3>
                            <p className="text-primary/70">
                                Let's discuss how we can help you achieve similar results.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-accent hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                            <Sparkles className="w-4 h-4" />
                            Start Your Success Story
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}