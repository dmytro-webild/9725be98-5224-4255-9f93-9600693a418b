"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Briefcase, Building, Droplets, ShieldCheck, Zap, Users, Award } from "lucide-react";

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
        { name: "Why Choose Us", id: "#why-choose-us" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Colvin Twins"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{ variant: "gradient-bars" }}
      logoText="Colvin Twins Concrete & Construction"
      description="Professional, family-owned construction and concrete experts. From foundation pouring to site maintenance, we deliver safety-first, dependable results."
      buttons={[
        { text: "Get a Free Quote", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
        { text: "View Services", onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774988868355-doi78pnh.jpg"
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
          title: "Concrete Work",          description: "Expert pouring, flatwork, and structural foundations for residential and commercial projects.",          icon: Building,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774991225545-ciq8jk80.jpg?_wi=2", imageAlt: "Concrete pouring service" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774991229900-9onbznnt.jpg", imageAlt: "Concrete work finish" },
          ]
        },
        {
          title: "Pressure Washing",          description: "High-pressure cleaning for driveways, siding, walkways, and heavy machinery.",          icon: Droplets,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774990842713-feb2k62q.jpg", imageAlt: "Before pressure washing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774990850829-cv3xsf59.jpg", imageAlt: "After pressure washing" },
          ]
        },
        {
          title: "Snow Removal",          description: "Professional snow clearing and site management solutions for your property all winter long.",          icon: Briefcase,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774992297873-n029rg7y.jpg", imageAlt: "Snow removal service" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774992301985-x9ppeq1s.jpg", imageAlt: "Clearing site in winter" },
          ]
        },
      ]}
      title="Our Services"
      description="Reliable, professional, and built to last. Whatever the project, we have you covered."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Safety First"
      title="Fully Insured & Dependable"
      description="We pride ourselves on a safety-first culture. Our team is fully insured and trained to manage complex sites with professionalism and care."
      subdescription="When you hire Colvin Twins, you're choosing peace of mind, reliability, and project quality that exceeds expectations."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/worker-wearing-safety-gear-construction-site_1150-4568.jpg"
      imageAlt="Safety equipment and professional work site"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="advantage" data-section="advantage">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Why Choose Us"
      title="The Colvin Twins Difference"
      description="Why settle for general contractors when you can partner with family-owned experts? We combine small-town integrity with enterprise-grade quality control."
      subdescription="Our competitive advantage is simple: we show up on time, maintain a spotless worksite, and communicate clearly from day one. You aren't just another job site to us—you are a partner."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bj0A1hCFeuP28CLVQmYQBe1XNU/uploaded-1774994323863-ik1a491o.webp"
      imageAlt="Expert team consultation"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Contact Colvin Twins"
      description="Have questions? Reach out via phone or email for a consultation, or complete the form below for a free estimate."
      inputs={[
        { name: "fullName", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
      ]}
      textarea={{ name: "projectDetails", placeholder: "Tell us about your project", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/engineer-reviewing-plans-at-site_1150-5678.jpg"
      imageAlt="Construction site planning"
      mediaAnimation="slide-up"
      buttonText="Send Request"
      onSubmit={(data) => console.log("Form submitted:", data)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/industrial-construction-site-with-heavy-machinery_107424-699.jpg?_wi=2"
      imageAlt="Construction site"
      columns={[
        { title: "Colvin Twins", items: [{ label: "About Us", href: "#about" }, { label: "Why Choose Us", href: "#why-choose-us" }] },
        { title: "Services", items: [{ label: "Concrete", href: "#services" }, { label: "Pressure Washing", href: "#services" }, { label: "Snow Removal", href: "#services" }] },
        { title: "Get in Touch", items: [{ label: "Phone: 555-0123", href: "tel:5550123" }, { label: "Email: hello@colvintwins.com", href: "mailto:hello@colvintwins.com" }, { label: "Free Estimate", href: "#contact" }] },
      ]}
      logoText="Colvin Twins"
      copyrightText="© 2025 Colvin Twins Concrete & Construction"
      onPrivacyClick={() => alert("Privacy Policy Coming Soon")}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}