import { SITE_URL } from "@/lib/site";

export default function StructuredData() {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Abhishek Enterprises",
        url: SITE_URL,
        logo: `${SITE_URL}/abhient.jpeg`,
        description:
          "India-based metal manufacturing company specializing in steel and alloy products for international industrial markets",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Ground, First Floor, Jaspal Bangar Near Khushi Kanda, Yumuna Industrial Area",
          addressLocality: "Ludhiana",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-73077-79000",
          contactType: "Customer Service",
          email: "abhishekenterprises4191@gmail.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: "Abhishek Enterprises",
        description:
          "Steel and alloy manufacturing for industrial markets — Ludhiana, Punjab, India.",
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
