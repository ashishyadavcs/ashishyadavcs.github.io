"use client";
import Button from "@/components/Button";
import Container from "@/components/layout/Container";
import { Suspense, useState } from "react";
import { FiMail, FiPhone, FiMessageSquare, FiUser, FiSend, FiCalendar } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ContactStyle from "@/styles/contact";
import config from "public/config";
import Meeting from "@/app/components/Meeting";
const Page = () => {
    const [loading, setloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        body: "",
    });

    const { personal } = config;
    const { email, phone, showPhone, socialMedia } = personal;
    const { linkedin, github, twitter } = socialMedia;

    const handleSubmit = async e => {
        e.preventDefault();
        setloading(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            mobile: formData.get("mobile"),
            body: formData.get("body"),
        };

        try {
            // Simulate API call - replace with actual endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            setSuccess(true);
            e.target.reset();
            setloading(false);
        } catch (err) {
            console.error("Error sending message:", err);
            setloading(false);
        }
    };

    return (
        <ContactStyle>
            <div className="hero-section">
                <Container>
                    <h1 className="heading">Get in Touch</h1>
                    <p>
                        We&apos;d love to hear from you. Contact us for any inquiries or assistance
                        with your projects.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="wrapper">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Fill out the form and our team will get back to you within 24 hours.</p>

                        <div className="contact-details">
                            {showPhone && (
                                <div className="contact-item">
                                    <div className="icon">
                                        <FiPhone />
                                    </div>
                                    <div className="text">
                                        <h3>Phone</h3>
                                        <p>{phone}</p>
                                    </div>
                                </div>
                            )}

                            <div className="contact-item">
                                <div className="icon">
                                    <FiMail />
                                </div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>{email}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">
                                    <MdLocationOn />
                                </div>
                                <div className="text">
                                    <h3>Location</h3>
                                    <p>{personal.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href={linkedin} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href={github} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href={twitter} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <Meeting maxHeight="400px" name={formData.name} email={formData.email} />
                    </div>
                </div>
            </Container>
        </ContactStyle>
    );
};

export default Page;
