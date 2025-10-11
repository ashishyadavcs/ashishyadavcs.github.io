"use client";

import {
    SectionContainer,
    SectionInner,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
} from "@/app/styles/components/Section.styles";

const Section = ({ id, title, subtitle, children, centered = false, className = "", ...props }) => {
    return (
        <SectionContainer
            id={id}
            className={`section ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            {...props}
        >
            <SectionInner>
                {(title || subtitle) && (
                    <SectionHeader $centered={centered}>
                        {title && <SectionTitle>{title}</SectionTitle>}
                        {subtitle && (
                            <SectionSubtitle $centered={centered}>{subtitle}</SectionSubtitle>
                        )}
                    </SectionHeader>
                )}
                {children}
            </SectionInner>
        </SectionContainer>
    );
};

export default Section;
