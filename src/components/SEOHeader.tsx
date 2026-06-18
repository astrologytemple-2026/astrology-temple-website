import { useEffect } from "react";
import { FrequentlyAskedQuestion } from "../types";

interface SEOHeaderProps {
  title?: string;
  description?: string;
  keywords?: string[];
  faqs?: FrequentlyAskedQuestion[];
}

export default function SEOHeader({
  title = "Astrologer Ravi Rangaswamee Chennai,Online Astrologer, Astrology Temple",
  description = "Consult Chennai's leading Astrologer Ravi Rangaswamee in Vadapalani for Astrology, Horoscope, Numerology, Nameology, Vaasthu, Marriage Matching and Parikaaram @ Remedy",
  keywords = [
    "Best Astrologer in Chennai",
    "Best Astrologer in Vadapalani",
    "Astrology Temple Vadapalani",
    "Ravi Rangaswamee Astrologer",
    "Astrologer Ravi Rangaswamee",
    "Comprehensive Astrology Consultation",
    "Tamil Astrology",
    "Horoscope Reading",
    "Numerology",
    "Nameology",
    "Vaasthu Consultant Chennai",
    "Marriage Matching Astrology",
    "120 Years Dasaa Bhukthi Antharam Chart",
    "Dasaa Bhukthi Antharam Chart 120 Years",
    "Parikaaram Remedies",
    "Online Astrology",
    "Online Horoscope",
    "Online Numerology",
    "Online Vaasthu",
    "Online Marriage Matching Astrology",
    "Online 120 Years Dasaa Bhukthi Antharam Chart",
    "Online Parikaaram Remedies",
  ],
  faqs = []
}: SEOHeaderProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to set/create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Standard Metas
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords.join(", "));
    setMetaTag("name", "robots", "index, follow");

    // 2.5 Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    // Always use the non-www secure version for canonical
    canonicalLink.setAttribute("href", `https://astrologytemple.com${window.location.pathname}`);

    // 3. Open Graph Metas for Social Link Previews
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", window.location.href);
    setMetaTag("property", "og:image", "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600"); // Celestial aesthetic placeholder image
    setMetaTag("property", "og:site_name", "Astrology Temple");

    // 4. Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    // 5. Ingest JSON-LD Schemas
    // Schema A: LocalBusiness
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ConsultingBusiness",
      "name": "Astrology Temple",
      "alternateName": "Astrology Temple அஸ்ட்ராலஜி டெம்பிள்",
      "founder": {
        "@type": "Person",
        "name": "N.Ravi Rangaswamee"
      },
      "image": "https://img.youtube.com/vi/tB_whqfZoN0/hqdefault.jpg",
      "description": description,
      "url": window.location.origin,
      "telephone": "+91 9942684099",
      "email": "astrologytemple@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vadapalani",
        "addressRegion": "Chennai, Tamil Nadu",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Chennai"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0500,
        "longitude": 80.2121
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      },
      "sameAs": [
        "https://www.youtube.com/@astrologytemple",
        "https://www.facebook.com/dasaabhukthiantharam.chart",
        "https://x.com/temple12741"
      ]
    };

    // Schema B: Breadcrumb
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Consultations & Bookings",
          "item": `${window.location.origin}/#book`
        }
      ]
    };

    // Schema C: FAQ
    const faqSchemaItems = faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }));

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSchemaItems
    };

    // Inject scripts directly to DOM head safely, cleanup on unmount
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "jsonld-localbusiness";
    localBusinessScript.text = JSON.stringify(localBusinessSchema);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "jsonld-breadcrumb";
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "jsonld-faq";
    faqScript.text = JSON.stringify(faqSchema);

    // Clean up older scripts before appending new ones
    document.getElementById("jsonld-localbusiness")?.remove();
    document.getElementById("jsonld-breadcrumb")?.remove();
    document.getElementById("jsonld-faq")?.remove();

    document.head.appendChild(localBusinessScript);
    document.head.appendChild(breadcrumbScript);
    if (faqs.length > 0) {
      document.head.appendChild(faqScript);
    }

    return () => {
      document.getElementById("jsonld-localbusiness")?.remove();
      document.getElementById("jsonld-breadcrumb")?.remove();
      document.getElementById("jsonld-faq")?.remove();
    };
  }, [title, description, keywords, faqs]);

  return null; // Side effect only component
}
