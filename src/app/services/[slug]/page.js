import services from "public/config/services";
import ServiceDetailContent from "./ServiceDetail";
import { notFound } from "next/navigation";

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
