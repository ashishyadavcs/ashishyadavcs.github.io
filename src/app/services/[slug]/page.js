import services from "public/config/services";
import ServiceDetailContent from "./ServiceDetail";
import { notFound } from "next/navigation";

import config from "public/config";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found | Portfolio",
        };
    }

    return {
        title: `${service.title} | ${config.seo.author.name}`,
        description: service.shortDescription || service.description,
        keywords: [
            service.title,
            ...(service.technologies || []),
            "services",
            "developer",
            config.seo.author.name,
        ],
        openGraph: {
            title: `${service.title} | ${config.seo.author.name}`,
            description: service.shortDescription || service.description,
            url: `${config.seo.url}/services/${slug}/`,
            type: "website",
        },
        alternates: {
            canonical: `${config.seo.url}/services/${slug}/`,
        },
    };
}

export async function generateStaticParams() {
    return services.map(service => ({ slug: service.slug }));
}

const ServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) return notFound();

    return <ServiceDetailContent slug={slug} />;
};

export default ServiceDetailPage;
