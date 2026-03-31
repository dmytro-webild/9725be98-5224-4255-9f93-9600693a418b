"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
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
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Colvin Twins"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background="gradient-bars"
      logoText="Colvin Twins Concrete & Construction"
      description="Premium concrete solutions and professional construction services for residential and commercial projects. Built on safety, quality, and reliability."
      buttons={[
        {
          text: "Get Estimate",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-ongoing-construction-with-tracks-bulldozer-abandoned-land_181624-17192.jpg"
      imageAlt="Professional construction work site"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Concrete Services",
          description: "Expert pouring, foundation work, and decorative concrete finishes.",
          icon: Building,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-is-working-with-reinforce-concrete-stair-structure-modification-using-hand-drill_1150-6131.jpg",
              imageAlt: "Concrete pouring service",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-is-working-with-reinforce-concrete-stair-structure-modification-using-hand-drill_1150-6131.jpg",
              imageAlt: "Concrete work finish",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-ongoing-construction-with-tracks-bulldozer-abandoned-land_181624-17192.jpg",
          imageAlt: "construction work site concrete professional",
        },
        {
          title: "Pressure Washing",
          description: "Industrial-grade cleaning for driveways, siding, and heavy machinery.",
          icon: Droplets,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/workman-applying-road-sweeper-construction-site_259150-60509.jpg",
              imageAlt: "Pressure washing service",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/workman-applying-road-sweeper-construction-site_259150-60509.jpg",
              imageAlt: "Surface cleaning process",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/factory-manager-gives-paperwork-files-investors-reviewing-financial-statement_482257-126495.jpg",
          imageAlt: "construction team meeting safety helmets",
        },
        {
          title: "Snow Removal",
          description: "Reliable snow removal and site management during winter months.",
          icon: Briefcase,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-perspective-wood-logs-timber-industry_23-2151239349.jpg",
              imageAlt: "Snow removal service",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-perspective-wood-logs-timber-industry_23-2151239349.jpg",
              imageAlt: "Clearing site in winter",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-is-working-with-reinforce-concrete-stair-structure-modification-using-hand-drill_1150-6131.jpg",
          imageAlt: "concrete work paving driveway construction",
        },
      ]}
      title="Our Expert Services"
      description="From foundation pouring to professional site maintenance, we deliver excellence in every square inch."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Excellence in Construction"
      description="We are a family-owned and operated construction business with over 20 years of experience serving our community."
      subdescription="Safety is our priority. We ensure that every job meets the highest standards of structural integrity and aesthetic finish."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/factory-manager-gives-paperwork-files-investors-reviewing-financial-statement_482257-126495.jpg"
      imageAlt="Construction team onsite"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          role: "Business Owner",
          company: "Downtown Plaza",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-construction-wearing-protection-gear_23-2148784062.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Property Manager",
          company: "Vista Apartments",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-young-girl-blue-shirt-is-sitting-sofa-studio-she-has-sketches-her-both-hands-she-is-looking-camera_197531-799.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Developer",
          company: "Growth Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shallow-focus-young-female-construction-worker-with-yellow-helmet-daytime_181624-53062.jpg",
        },
        {
          id: "5",
          name: "Alex P.",
          role: "General Contractor",
          company: "BuildRight Pros",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by hundreds of homeowners and business owners across the region."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Your Free Estimate"
      description="Ready to start your next concrete or construction project? Contact us today for a free, no-obligation quote."
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "projectDetails",
        placeholder: "Project details or service requested",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-engineer-architect-looking-clipboard_23-2148233774.jpg"
      imageAlt="Construction site planning"
      mediaAnimation="slide-up"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-ongoing-construction-with-tracks-bulldozer-abandoned-land_181624-17192.jpg"
      imageAlt="Construction site"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Concrete",
              href: "#services",
            },
            {
              label: "Pressure Washing",
              href: "#services",
            },
            {
              label: "Snow Removal",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Free Estimate",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Colvin Twins"
      copyrightText="© 2025 Colvin Twins Concrete & Construction"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
