"use client";

import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Globe,
    TrendingUp,
    Search,
    Palette,
    Wallet,
    Users,
    ChevronRight,
    CheckCircle,
    MessageSquare
} from "lucide-react";
import { useState } from "react";

const serviceOptions = [
    { id: "website", label: "Website", icon: <Globe className="w-4 h-4" /> },
    { id: "marketing", label: "Performance Marketing", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "seo", label: "SEO", icon: <Search className="w-4 h-4" /> },
    { id: "branding", label: "Branding/Creative", icon: <Palette className="w-4 h-4" /> },
    { id: "web3", label: "Web3 Integration", icon: <Wallet className="w-4 h-4" /> },
    { id: "team", label: "Dedicated Team", icon: <Users className="w-4 h-4" /> }
];

const budgetOptions = [
    { value: "<10k", label: "<AED 10K" },
    { value: "10k-25k", label: "AED 10K - 25K" },
    { value: "25k-60k", label: "AED 25K - 60K" },
    { value: ">60k", label: "> AED 60K" }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        services: [] as string[],
        budget: "",
        projectDetails: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleServiceToggle = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(serviceId)
                ? prev.services.filter(id => id !== serviceId)
                : [...prev.services, serviceId]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const api = "https://backend.thecartel.ai/mail-services/form-submit";

        try {
            const res = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log({ data })

            if (!res.ok || !data?.status) {
                throw new Error(data?.message || "Something went wrong");
            }

            setIsSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    services: [],
                    budget: "",
                    projectDetails: "",
                });
            }, 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="relative py-20 lg:py-28 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 mb-6">
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-primary">Get in Touch</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Let's Build{" "}
                        <span className="relative">
                            Something Great
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Ready to scale your digital presence? Share your project details
                        and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div>
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-primary/5">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Dubai Office</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-primary/10">
                                    <div className="text-xl font-bold text-primary mb-2">Sam Digital Solutions</div>
                                    <p className="text-primary/70">Mazaya Business Avenue BB2</p>
                                    <p className="text-primary/70">Dubai, UAE</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-primary/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Phone className="w-5 h-5 text-accent" />
                                            <div className="font-semibold text-primary">Phone</div>
                                        </div>
                                        <a
                                            href="tel:+971585533078"
                                            className="text-lg text-primary hover:text-accent transition-colors"
                                        >
                                            +971 58 553 3078
                                        </a>
                                    </div>

                                    <div className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-primary/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Mail className="w-5 h-5 text-accent" />
                                            <div className="font-semibold text-primary">Email</div>
                                        </div>
                                        <a
                                            href="mailto:connect@samdigitalsolutions.digital"
                                            className="text-primary hover:text-accent transition-colors break-all"
                                        >
                                            connect@samdigitalsolutions.digital
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-primary/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Clock className="w-5 h-5 text-accent" />
                                        <div className="font-semibold text-primary">Business Hours</div>
                                    </div>
                                    <div className="text-primary/70">
                                        <div>Mon–Fri • 10:00–18:00 GST</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                            <h4 className="font-semibold text-primary mb-4">Why Work With Us</h4>
                            <div className="space-y-3">
                                {[
                                    "24-hour response time",
                                    "Free initial consultation",
                                    "Detailed project proposal",
                                    "Transparent pricing",
                                    "Dedicated project manager"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span className="text-sm text-primary/70">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 lg:p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                                    <p className="text-primary/70 mb-6">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-accent hover:shadow-lg transition-all duration-300"
                                    >
                                        Send Another Message
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-xl font-bold text-primary mb-6">Send us a message</h3>

                                    {/* Name Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 text-primary placeholder-primary/40 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 text-primary placeholder-primary/40 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="your@company.com"
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Phone/WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 text-primary placeholder-primary/40 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="XX XXX XXXX"
                                        />
                                    </div>

                                    {/* Services Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-primary mb-3">
                                            I need (select multiple)
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {serviceOptions.map((service) => (
                                                <button
                                                    key={service.id}
                                                    type="button"
                                                    onClick={() => handleServiceToggle(service.id)}
                                                    className={`
                                                        flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-300
                                                        ${formData.services.includes(service.id)
                                                            ? 'border-accent bg-accent/10 text-accent'
                                                            : 'border-primary/20 bg-white/50 text-primary/70 hover:border-primary/30'
                                                        }
                                                    `}
                                                >
                                                    <div className="mb-2">
                                                        {service.icon}
                                                    </div>
                                                    <span className="text-xs font-medium text-center">
                                                        {service.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Budget Field */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Rough Budget
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 text-primary focus:outline-none focus:border-accent transition-colors"
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Project Details */}
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Project Details
                                        </label>
                                        <textarea
                                            name="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 text-primary placeholder-primary/40 focus:outline-none focus:border-accent transition-colors resize-none"
                                            placeholder="Tell us about your project, timeline, and specific requirements..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                            w-full flex items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold
                                            transition-all duration-300
                                            ${isSubmitting
                                                ? 'bg-primary/70 cursor-not-allowed'
                                                : 'bg-primary hover:shadow-lg hover:scale-[1.02]'
                                            }
                                        `}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                                                <span className="text-accent">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-accent">Send Message</span>
                                                <Send className="w-4 h-4 text-accent" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Response Time Indicator */}
                        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-accent" />
                                <div className="text-sm text-primary/70">
                                    <span className="font-medium text-primary">Fast response:</span> Typically replies within 2 hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternative Contact Methods */}
                <div className="mt-16 lg:mt-20">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">Other Ways to Connect</h3>
                        <p className="text-primary/70">Choose your preferred method of communication</p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto">
                        <a
                            href="https://wa.me/971585533078"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-2 sm:p-4 md:p-6 rounded-xl bg-green-50 border border-green-200 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex p-1 sm:p-1.5 md:p-3 rounded-lg bg-green-100 mb-4">
                                <MessageSquare className="w-3 h-3 md:w-6 md:h-6 text-green-600" />
                            </div>
                            <div className="font-semibold text-sm md:text-base text-green-700 mb-2">WhatsApp</div>
                            <div className="text-xs md:text-sm text-green-600">Direct chat support</div>
                            <ChevronRight className="w-4 h-4 text-green-600 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a
                            href="mailto:connect@samdigitalsolutions.digital"
                            className="group p-2 sm:p-4 md:p-6 rounded-xl bg-blue-50 border border-blue-200 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex p-1 sm:p-1.5 md:p-3 rounded-lg bg-blue-100 mb-4">
                                <Mail className="w-3 h-3 md:w-6 md:h-6 text-blue-600" />
                            </div>
                            <div className="font-semibold text-sm md:text-base text-blue-700 mb-2">Email</div>
                            <div className="text-xs md:text-sm text-blue-600">For detailed proposals</div>
                            <ChevronRight className="w-4 h-4 text-blue-600 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <a
                            href="tel:+971585533078"
                            className="group p-2 sm:p-4 md:p-6 rounded-xl bg-purple-50 border border-purple-200 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex p-1 sm:p-1.5 md:p-3 rounded-lg bg-purple-100 mb-4">
                                <Phone className="w-3 h-3 md:w-6 md:h-6 text-purple-600" />
                            </div>
                            <div className="font-semibold text-sm md:text-base text-purple-700 mb-2">Call Us</div>
                            <div className="text-xs md:text-sm text-purple-600">Direct conversation</div>
                            <ChevronRight className="w-4 h-4 text-purple-600 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}