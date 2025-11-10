import React from "react";
import AboutStyle from "../../styles/about";
import Timeline from "../../components/Timeline";
import config from "../../../../public/config";

const page = () => {
    const { experience, personal } = config;
    const { education } = personal;

    return (
        <AboutStyle>
            <h1>About Me</h1>
            {personal.aboutme && (
                <div
                    className="about-description"
                    dangerouslySetInnerHTML={{ __html: personal.aboutme }}
                />
            )}

            <h2 className="section-title">Professional Experience</h2>
            <Timeline data={experience} />

            <h2 className="section-title">Education</h2>
            <Timeline data={education} />
        </AboutStyle>
    );
};

export default page;
