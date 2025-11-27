import React from "react";
import AboutStyle from "@/styles/about";
import Timeline from "@/components/Timeline";
import config from "public/config";
import MyImage from "@/app/components/MyImage";

export const metadata = {
    title: config.seo.pages.about.title,
    description: config.seo.pages.about.description,
    keywords: config.seo.pages.about.keywords,
    openGraph: {
        title: config.seo.pages.about.title,
        description: config.seo.pages.about.description,
        url: `${config.seo.url}/about`,
        type: "website",
    },
};

const page = () => {
    const { experience, personal } = config;
    const { education } = personal;

    return (
        <AboutStyle>
            <h1>About Me</h1>
            <MyImage
                className="profile"
                height={200}
                width={200}
                src={personal.image}
                alt={personal.name || personal.title}
                priority
            />

            {personal.aboutme && (
                <div className="about-description">
                    {personal.title && <h2 className="title">{personal.title}</h2>}
                    <div dangerouslySetInnerHTML={{ __html: personal.aboutme }} />
                </div>
            )}

            <h2 className="section-title">Professional Experience({personal.totalExperience})</h2>
            <Timeline data={experience} />

            <h2 className="section-title">Education</h2>
            <Timeline data={education} />
        </AboutStyle>
    );
};

export default page;
