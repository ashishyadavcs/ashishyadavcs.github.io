"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Button from "@/app/components/common/Button";
import StructuredData from "./StructuredData";
import { fadeIn } from "@/app/utils/motion";
import { personal } from "@/app/utils/data";
import { SITE_METADATA } from "@/app/constants";
import {
    generateBreadcrumbStructuredData,
    createStructuredDataScript,
    PAGE_METADATA,
} from "@/app/utils/seo";
import {
    ContactContainer,
    HeroSection,
    HeroContent,
    HeroTitle,
    Breadcrumb,
    ContactSection,
    Container,
    ContactGrid,
    ContactInfo,
    ContactItem,
    IconContainer,
    ContactDetails,
    ContactTitle,
    ContactText,
    ContactForm,
    FormTitle,
    FormRow,
    FormGroup,
    Label,
    Input,
    TextArea,
} from "@/app/styles/Contact.styles";

/**
 * Contact page client component with all interactive features
 * @returns {JSX.Element} Contact page client component
 */
export default function ContactPageClient() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    // Add structured data for Contact page
    useEffect(() => {
        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => script.remove());

        // Add breadcrumb structured data
        const breadcrumbData = generateBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
        ]);
        const breadcrumbScript = document.createElement("script");
        Object.assign(breadcrumbScript, createStructuredDataScript(breadcrumbData));
        document.head.appendChild(breadcrumbScript);

        // Update page title and meta description
        document.title = `${PAGE_METADATA.contact.title} | ${SITE_METADATA.author}`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = PAGE_METADATA.contact.description;
        }

        // Cleanup function
        return () => {
            const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
            scriptsToRemove.forEach(script => script.remove());
        };
    }, []);

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(null);
            }, 5000);
        }, 1500);
    };

    return (
        <ContactContainer>
            <StructuredData page="contact" />
            <HeroSection>
                <HeroContent>
                    <Breadcrumb>
                        <Link href="/">Home</Link> / <span>Contact</span>
                    </Breadcrumb>
                    <HeroTitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </HeroTitle>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Let&apos;s discuss your project or just say hello
                    </motion.p>
                </HeroContent>
            </HeroSection>

            <ContactSection>
                <Container>
                    <ContactGrid>
                        <ContactInfo
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <h2 style={{ marginBottom: "2.5rem" }}>Contact Information</h2>

                            <ContactItem>
                                <IconContainer>
                                    <FiMail />
                                </IconContainer>
                                <ContactDetails>
                                    <ContactTitle>Email</ContactTitle>
                                    <ContactText>{personal.contacts.email}</ContactText>
                                </ContactDetails>
                            </ContactItem>

                            <ContactItem>
                                <IconContainer>
                                    <FiPhone />
                                </IconContainer>
                                <ContactDetails>
                                    <ContactTitle>Phone</ContactTitle>
                                    <ContactText>{personal.contacts.phone}</ContactText>
                                </ContactDetails>
                            </ContactItem>

                            <ContactItem>
                                <IconContainer>
                                    <FiMapPin />
                                </IconContainer>
                                <ContactDetails>
                                    <ContactTitle>Location</ContactTitle>
                                    <ContactText>{personal.contacts.address}</ContactText>
                                </ContactDetails>
                            </ContactItem>
                        </ContactInfo>

                        <ContactForm
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            onSubmit={handleSubmit}
                        >
                            <FormTitle>Send a Message</FormTitle>

                            <FormRow>
                                <FormGroup>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                            </FormRow>

                            <FormGroup>
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="message">Message</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                                <FiSend style={{ marginLeft: "0.5rem" }} />
                            </Button>

                            {submitSuccess && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{
                                        color: "green",
                                        marginTop: "1rem",
                                        padding: "0.75rem",
                                        borderRadius: "4px",
                                        backgroundColor: "rgba(0, 255, 0, 0.1)",
                                    }}
                                >
                                    Your message has been sent successfully! We&apos;ll get back to
                                    you soon.
                                </motion.p>
                            )}
                        </ContactForm>
                    </ContactGrid>
                </Container>
            </ContactSection>
        </ContactContainer>
    );
}
