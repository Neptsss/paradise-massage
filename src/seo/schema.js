const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Paradise Massage & Treatment",
    url: "https://paradisemassage.biz.id",
    logo: "https://paradisemassage.biz.id/icon_paradise.png",
    telephone: "+6285719290327",
    address: {
        "@type": "PostalAddress",

        streetAddress: "Jl. Prawirotaman No.05",

        addressLocality: "Yogyakarta",

        addressRegion: "Daerah Istimewa Yogyakarta",

        postalCode: "55153",

        addressCountry: "ID",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: -7.818698,
        longitude: 110.369441,
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Layanan Paradise Massage & Treatment",

        itemListElement: [
            {
                "@type": "Offer",

                itemOffered: {
                    "@type": "Service",
                    name: "Pijat Tradisional (Traditional Massage)",
                    description:"Pijatan relaksasi menggunakan teknik tradisional dan minyak esensial untuk membantu meredakan stres, mengurangi ketegangan otot, serta memberikan rasa nyaman pada tubuh."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Refleksi",
                    description: "Terapi pijat pada titik-titik refleksi kaki yang dipercaya dapat membantu melancarkan peredaran darah, mengurangi kelelahan, dan meningkatkan keseimbangan tubuh."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Totok Wajah (Face Acupressure)",
                    description: "Perawatan wajah dengan teknik penekanan pada titik-titik tertentu untuk membantu merilekskan otot wajah, meningkatkan sirkulasi darah, dan membuat kulit tampak lebih segar."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Terapi Kerokan (Scraping)",
                    description: "Terapi kerokan modern menggunakan alat khusus untuk membantu meredakan pegal-pegal, meningkatkan aliran darah, serta membantu tubuh merasa lebih ringan dan rileks."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Pijat Cedera & Memar",
                    description: "Terapi pemulihan yang berfokus pada area memar atau ketegangan otot untuk membantu mempercepat proses pemulihan dan mengurangi rasa tidak nyaman pada tubuh."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Acupuncture",
                    description: "Metode pengobatan tradisional dengan stimulasi titik-titik tertentu pada tubuh untuk membantu meredakan nyeri, meningkatkan energi, dan mendukung kesehatan secara menyeluruh."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Shiatsu",
                    description: "Teknik pijat asal Jepang yang menggunakan tekanan jari pada titik-titik energi tubuh untuk membantu mengurangi stres, memperbaiki postur, dan meningkatkan relaksasi."
                }
            },
        ],
    },
    contactPoint: {
        "@type": "ContactPoint",

        telephone: "+6285719290327",

        contactType: "customer service",
    },
    areaServed: {
        "@type": "City",

        name: "Yogyakarta",
    },
}

export default schema