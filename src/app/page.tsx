"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Briefcase, Building, Droplets, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Services", id: "#services" },
        { name: "About", id: "#about" },
        { name: "Gallery", id: "#gallery" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Colvin Twins"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{ variant: "gradient-bars" }}
      logoText="Colvin Twins Concrete & Construction"
      description="Premium concrete solutions and professional construction services for residential and commercial projects. Built on safety, quality, and reliability."
      buttons={[
        { text: "Get Estimate", href: "#contact" },
        { text: "View Services", href: "#services" },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/industrial-construction-site-with-heavy-machinery_107424-699.jpg?_wi=1"
      imageAlt="Professional construction work site"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Concrete Services",          description: "Expert pouring, foundation work, and decorative concrete finishes.",          icon: Building,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/workers-pouring-concrete-foundation-construction-site_1150-1845.jpg?_wi=1", imageAlt: "Concrete pouring service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/concrete-slab-poured-construction-site_1150-1846.jpg?_wi=2", imageAlt: "Concrete work finish" },
          ]
        },
        {
          title: "Pressure Washing",          description: "Industrial-grade cleaning for driveways, siding, and heavy machinery.",          icon: Droplets,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/professional-cleaning-driveway-pressure-washer_1150-2456.jpg?_wi=1", imageAlt: "Pressure washing service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/clean-surface-after-pressure-washing_1150-2457.jpg?_wi=2", imageAlt: "Surface cleaning process" },
          ]
        },
        {
          title: "Snow Removal",          description: "Reliable snow removal and site management during winter months.",          icon: Briefcase,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/snow-clearing-heavy-equipment-winter_1150-3245.jpg?_wi=1", imageAlt: "Snow removal service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cleared-driveway-after-snow-removal_1150-3246.jpg?_wi=2", imageAlt: "Clearing site in winter" },
          ]
        },
      ]}
      title="Our Expert Services"
      description="From foundation pouring to professional site maintenance, we deliver excellence in every square inch."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Excellence in Construction"
      description="We are a family-owned and operated construction business with over 20 years of experience serving our community."
      subdescription="Safety is our priority. We ensure that every job meets the highest standards of structural integrity and aesthetic finish."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/professional-construction-team-meeting-onsite_1150-4567.jpg"
      imageAlt="Construction team onsite"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      cardTitle="Trusted by Professionals"
      cardTag="Our Reputation"
      cardAnimation="slide-up"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-homeowner-standing-front-new-patio_1150-9876.jpg" },
        { id: "2", name: "Mark D.", imageSrc: "http://img.b2bpic.net/free-photo/commercial-site-owner-on-project-consultation_1150-9877.jpg" },
        { id: "3", name: "Emily R.", imageSrc: "http://img.b2bpic.net/free-photo/happy-client-after-renovation_1150-9878.jpg" },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get Your Free Estimate"
      description="Ready to start your next concrete or construction project? Contact us today for a free, no-obligation quote."
      inputs={[
        { name: "fullName", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
      ]}
      textarea={{ name: "projectDetails", placeholder: "Project details or service requested", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/engineer-reviewing-plans-at-site_1150-5678.jpg"
      imageAlt="Construction site planning"
      mediaAnimation="slide-up"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/industrial-construction-site-with-heavy-machinery_107424-699.jpg?_wi=2"
      imageAlt="Construction site"
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Gallery", href: "#gallery" }] },
        { title: "Services", items: [{ label: "Concrete", href: "#services" }, { label: "Pressure Washing", href: "#services" }, { label: "Snow Removal", href: "#services" }] },
        { title: "Support", items: [{ label: "Contact Us", href: "#contact" }, { label: "Free Estimate", href: "#contact" }] },
      ]}
      logoText="Colvin Twins"
      copyrightText="© 2025 Colvin Twins Concrete & Construction"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}