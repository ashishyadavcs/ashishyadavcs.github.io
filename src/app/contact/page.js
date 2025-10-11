"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Button from "@/app/components/common/Button";
import { fadeIn } from "@/app/utils/motion";
import { contacts } from "public/data/aboutme";

const ContactContainer = styled.div`
    padding-top: 2rem;
`;

const HeroSection = styled.section`
    position: relative;
    padding: 6rem 2rem;
    background: linear-gradient(180deg, var(--background) 0%, var(--accent) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 4rem 1rem;
    }
`;

const HeroContent = styled.div`
    max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
    font-size: 3rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Breadcrumb = styled.div`
    margin-bottom: 1.5rem;
    font-size: 1rem;

    a {
        color: var(--secondary);

        &:hover {
            color: var(--primary);
        }
    }

    span {
        color: var(--primary);
    }
`;

const ContactSection = styled.section`
    padding: 5rem 2rem;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

const ContactInfo = styled(motion.div)``;

const ContactItem = styled.div`
    margin-bottom: 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

const IconContainer = styled.div`
    background-color: var(--accent);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--primary);
    flex-shrink: 0;
`;

const ContactDetails = styled.div``;

const ContactTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
    color: var(--secondary);
    line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
    background-color: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 4px 15px var(--shadow);
    padding: 2.5rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const FormTitle = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text);
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--card-border);
    background-color: var(--background);
    color: var(--text);
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--card-border);
    background-color: var(--background);
    color: var(--text);
    font-family: inherit;
    resize: vertical;
    min-height: 150px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }
`;

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

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
                                    <ContactText>{contacts.email}</ContactText>
                                    <ContactText>{contacts.supportEmail}</ContactText>
                                </ContactDetails>
                            </ContactItem>

                            <ContactItem>
                                <IconContainer>
                                    <FiPhone />
                                </IconContainer>
                                <ContactDetails>
                                    <ContactTitle>Phone</ContactTitle>
                                    <ContactText>{contacts.phone}</ContactText>
                                    <ContactText>{contacts.secondaryPhone}</ContactText>
                                </ContactDetails>
                            </ContactItem>

                            <ContactItem>
                                <IconContainer>
                                    <FiMapPin />
                                </IconContainer>
                                <ContactDetails>
                                    <ContactTitle>Location</ContactTitle>
                                    <ContactText>{contacts.address}</ContactText>
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
