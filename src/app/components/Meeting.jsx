import React from "react";
import Cal from "@calcom/embed-react";
import Container from "@/components/layout/Container";
import { FiCalendar } from "react-icons/fi";
const Meeting = ({ name = "", email = "" }) => {
    const calConfig = {
        layout: "month_view",
        theme: "light",
        ...(name && { name }),
        ...(email && { email }),
    };

    return (
        <div className="scheduling-section">
            <Container>
                <div className="scheduling-header">
                    <FiCalendar className="scheduling-icon" />
                    <h2>Schedule a Project Discussion</h2>
                    <p>
                        Want to discuss your project idea or requirements? Pick a time that works
                        for you and let&apos;s connect to talk through it.
                    </p>
                </div>
                <div className="cal-embed-wrapper">
                    <Cal
                        calLink="ashishyadavcs"
                        config={calConfig}
                        style={{
                            overflow: "auto",
                            height: "100%",
                        }}
                    />
                </div>
            </Container>
        </div>
    );
};

export default Meeting;
