import Container from "@/app/components/layout/Container";
import Meeting from "@/app/components/Meeting";
import config from "public/config";

export const metadata = {
    title: "Schedule a Meeting | Ashish Yadav",
    description: "Book a consultation, discovery call, or technical discussion with Ashish Yadav.",
    openGraph: {
        title: "Schedule a Meeting | Ashish Yadav",
        description:
            "Book a consultation, discovery call, or technical discussion with Ashish Yadav.",
        url: `${config.seo.url}/schedule-meeting/`,
        type: "website",
    },
    alternates: {
        canonical: `${config.seo.url}/schedule-meeting/`,
    },
};

const page = () => {
    return (
        <Container style={{ margin: "20px auto" }}>
            <Meeting />
        </Container>
    );
};

export default page;
