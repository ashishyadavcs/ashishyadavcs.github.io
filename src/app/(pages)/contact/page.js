"use client";
import Button from "@/components/Button";
import Container from "@/components/layout/Container";
import { useState } from "react";
import { FiMail, FiPhone, FiMessageSquare, FiUser, FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ContactStyle from "@/styles/contact";
import config from "public/config";
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
    const { phone, email, socialMedia } = personal;
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
                            <div className="contact-item">
                                <div className="icon">
                                    <FiPhone />
                                </div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>{phone}</p>
                                </div>
                            </div>

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
                        {success ? (
                            <div className="success-message">
                                <div className="success-icon">
                                    <IoMdCheckmarkCircle size={60} />
                                </div>
                                <h2>Thank you!</h2>
                                <p>
                                    Your message has been sent successfully. We&apos;ll get back to
                                    you shortly.
                                </p>
                                <Button type="primary" onClick={() => setSuccess(false)}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2>Send us a message</h2>

                                <div className="form-row">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiUser className="input-icon" />
                                            <span>Full Name</span>
                                        </div>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </label>
                                </div>

                                <div className="form-row two-columns">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiPhone className="input-icon" />
                                            <span>Phone</span>
                                        </div>
                                        <input
                                            required
                                            title="Enter a valid mobile number"
                                            maxLength={12}
                                            name="mobile"
                                            type="tel"
                                            placeholder="+91 9876543210"
                                        />
                                    </label>

                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiMail className="input-icon" />
                                            <span>Email</span>
                                        </div>
                                        <input
                                            title="Enter a valid email address"
                                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                        />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiMessageSquare className="input-icon" />
                                            <span>Your Message</span>
                                        </div>
                                        <textarea
                                            required
                                            name="body"
                                            placeholder="How can we help you?"
                                            rows="5"
                                        />
                                    </label>
                                </div>

                                <Button type="submit" disabled={loading}>
                                    <FiSend /> {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </ContactStyle>
    );
};

export default Page;
