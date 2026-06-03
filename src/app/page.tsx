"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Activity, Award, Feather, Heart, Paintbrush, ShieldCheck, Sparkles, Wrench, Quote } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Services",          id: "#features"},
        {
          name: "Portfolio",          id: "#products"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Quote",          id: "#contact"},
      ]}
      button={{
        text: "Request a Quote",        href: "#contact"}}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780480689439-0t879idk.png"
      logoAlt="MPY Paint Jobs Logo"
      brandName="MPY Paint Jobs"
      logoImageClassName="bg-transparent"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "glowing-orb"}}
      imagePosition="right"
      title="Your Frame Your Vision Pure Custom Art"
      description="MPY transforms bicycle frames into personalized masterpieces through premium handpainted designs, expert restorations, and one-of-a-kind finishes. From road to street, every bike tells your story."
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780468256156-hkaddfls.jpg"
      imageAlt="Custom painted bicycle frame in a studio"
      mediaAnimation="blur-reveal"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-extremal-young-woman-with-shining-smile-dressed-fashionable-biker-s-clothing-rests-fast-motorbike-likes-her-hobby-people-active-lifestyle-extreme-sport-concept_273609-2461.jpg",          alt: "Happy woman cyclist"},
        {
          src: "http://img.b2bpic.net/free-photo/young-business-woman-riding-electro-scooter-by-ofice-center_1303-31446.jpg",          alt: "Woman riding scooter"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-cool-man-having-fun-with-scooter_23-2149356795.jpg",          alt: "Man with scooter"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-adult-woman-posing-with-eco-friendly-bike_23-2148731241.jpg",          alt: "Stylish woman with bike"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-with-arms-crossed_1170-2406.jpg",          alt: "Smiling bike mechanic"},
      ]}
      avatarText="Join 500+ happy riders!"
      marqueeItems={[
        {
          type: "text-icon",          text: "Precision Craftsmanship",          icon: Feather,
        },
        {
          type: "text",          text: "Your Vision, Our Canvas"},
        {
          type: "text-icon",          text: "Unmatched Durability",          icon: ShieldCheck,
        },
        {
          type: "text",          text: "Hand-Painted Perfection"},
        {
          type: "text-icon",          text: "Ride in Unique Style",          icon: Activity,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Promise"
      title="Your Vision, Our Canvas."
      description="At MPY Paint Jobs, we believe every bike tells a story. Hear from our satisfied customers who have experienced the MPY difference and ride with unparalleled style."
      subdescription="Their custom bikes are now personalized masterpieces, reflecting their unique vision and our dedication to excellence."
      icon={Quote}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780477477656-h7tjjciu.jpg"
      imageAlt="Happy cyclist with a custom painted bike"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="The MPY Craft Process"
      description="We turn your vision into a precision-crafted finish where artistry and technical mastery meet."
      accordionItems={[
        {
          id: "process-1",          title: "1. Vision & Consultation",          content: "Share your ideas, inspirations, and desired aesthetics. We'll explore design concepts, color palettes, and material finishes to fully capture your vision."},
        {
          id: "process-2",          title: "2. Precision Preparation",          content: "Every frame undergoes rigorous preparation, from stripping old paint and repairing imperfections to meticulous sanding, ensuring a flawless canvas for your new artwork."},
        {
          id: "process-3",          title: "3. Artistic Application",          content: "Our master artisans apply your custom design with unparalleled precision, using premium paints and techniques to bring your unique vision to life, layer by intricate layer."},
        {
          id: "process-4",          title: "4. Durable Finish & Delivery",          content: "A multi-layer clear coat is applied for maximum durability and a deep, lasting shine. Your masterpiece is then carefully inspected and prepared for its journey back to you."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780469364696-hiwp5qar.jpg"
      imageAlt="Bicycle frame being prepped for painting"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "product-1",          name: "Elves Bikes Frame",          price: "Repaint Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780467729397-lqxx901e.jpg",          imageAlt: "Custom painted racing bike frame with geometric patterns",          variant: "Road Bike"
        },
        {
          id: "product-2",          name: "Ave Maldea Custom Frame",          price: "Restoration Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780467713489-t0pr11a2.jpg",          imageAlt: "Restored vintage bicycle frame with new paint",          variant: "Fixed Gear"
        },
        {
          id: "product-3",          name: "Specialized Works Frame",          price: "Repaint Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780466560858-i0e9zcla.jpg?_wi=1",          imageAlt: "Custom painted mountain bike frame with artistic design",          variant: "Road Bike"
        },
        {
          id: "product-4",          name: "Giant Frame",          price: "Repaint Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780478634392-fiau9xji.jpg",          imageAlt: "Custom painted electric bike frame for urban commuting",          variant: "Road Bike"
        },
        {
          id: "product-5",          name: "Cinelli Mash Frame",          price: "Repaint Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780479213950-wm0qmy6y.jpg",          imageAlt: "Custom painted track bike frame with bold graphics",          variant: "Fixed Gear"
        },
        {
          id: "product-6",          name: "Specialized Frame",          price: "Repaint Project",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780466560858-i0e9zcla.jpg?_wi=2",          imageAlt: "Bicycle frame with vibrant graffiti-style custom paint",          variant: "Road Bike"
        },
      ]}
      title="Our Masterpieces: A Gallery of Custom Frames"
      description="Explore a selection of our finest custom painted bicycle frames, showcasing unique designs, vibrant colors, and unparalleled attention to detail."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          icon: Award,
          title: "Crafting Since",          value: "2021"},
        {
          id: "m2",          icon: Sparkles,
          title: "Custom Designs",          value: "Limitless"},
        {
          id: "m3",          icon: Heart,
          title: "Client Satisfaction",          value: "99%"},
      ]}
      title="The Art of Numbers: Our Commitment to Excellence"
      description="Our studio is built on more than paint—it’s built on precision, craftsmanship, and detail. These numbers reflect our commitment to quality, client trust, and one-of-one artistry."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Alex P.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780481087551-8p9bipxt.jpg",          imageAlt: "Alex P. with custom bike"},
        {
          id: "t2",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-mechanic_1170-2354.jpg",          imageAlt: "Sarah J. with her custom bike"},
        {
          id: "t3",          name: "Mike C.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-blurry-woman-workshop_23-2149103832.jpg",          imageAlt: "Mike C. showing off his restoration"},
        {
          id: "t4",          name: "Emily R.",          imageSrc: "http://img.b2bpic.net/free-photo/interested-african-male-model-red-pants-smiling-portrait-inspired-black-guy-standing-near-green-bicycle_197531-20222.jpg",          imageAlt: "Emily R. excited about her new paint job"},
        {
          id: "t5",          name: "David K.",          imageSrc: "http://img.b2bpic.net/free-photo/man-racing-dirt-bike_23-2151493384.jpg",          imageAlt: "David K. admiring his custom frame"},
      ]}
      cardTitle="Riders Love Their MPY Transformations"
      cardTag="Unmatched Craftsmanship"
      cardAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "plan-1",          badge: "Standard Refinish",          badgeIcon: Paintbrush,
          price: "Starting at $400",          subtitle: "Fresh start for your frame",          buttons: [
            {
              text: "Get a Quote",              href: "#contact"},
          ],
          features: [
            "Single color repaint",            "Minor scratch repair",            "Standard clear coat",            "Full disassembly & reassembly"],
        },
        {
          id: "plan-2",          badge: "Custom Design",          badgeIcon: Sparkles,
          price: "Starting at $800",          subtitle: "Your vision, our artistry",          buttons: [
            {
              text: "Design Consultation",              href: "#contact"},
          ],
          features: [
            "Multi-color schemes & graphics",            "Advanced artistic details",            "Premium clear coat options",            "Digital mock-ups & revisions"],
        },
        {
          id: "plan-3",          badge: "Full Restoration",          badgeIcon: Wrench,
          price: "Starting at $1200",          subtitle: "Bringing classics back to life",          buttons: [
            {
              text: "Restore My Bike",              href: "#contact"},
          ],
          features: [
            "Historical accuracy matching",            "Deep rust & dent removal",            "Original decal recreation",            "Protective ceramic coating"],
        },
      ]}
      title="Tailored Artistry: Request Your Custom Quote"
      description="Every frame is a unique canvas. Our pricing reflects the intricate detail, custom design, and expert craftsmanship involved. Contact us for a personalized consultation."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get a Custom Quote for Your Dream Frame"
      description="Tell us about your vision. Our team will get back to you within 24 hours to discuss your project and provide a personalized quote."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number (Optional)"},
      ]}
      multiSelect={{
        name: "serviceType",        label: "Type of Service",        options: [
          "Custom Paint",          "Refinish",          "Restoration",          "Bulk Order (Bike Shops/Teams)",          "Other"],
      }}
      textarea={{
        name: "projectDetails",        placeholder: "Tell us about your project vision (e.g., bike type, style, colors, desired date)",        rows: 5,
        required: true,
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780476585715-xxiwthkq.jpg"
      imageAlt="Close up of bicycle frame in a workshop"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      buttonText="Request Quote"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EWBlOfpaA3C8pfIkwG9Yg6pp65/uploaded-1780480689439-0t879idk.png"
      logoAlt="MPY Paint Jobs Logo"
      logoText="MPY Paint Jobs"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Custom Paint",              href: "#features"},
            {
              label: "Refinishing",              href: "#features"},
            {
              label: "Restoration",              href: "#features"},
            {
              label: "Bulk Orders",              href: "#pricing"},
          ],
        },
        {
          title: "Studio",          items: [
            {
              label: "Portfolio",              href: "#products"},
            {
              label: "Our Process",              href: "#features"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 MPY Paint Jobs. All rights reserved."
      logoImageClassName="bg-transparent"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
