"use client";
import React from "react";
import Cal from "@calcom/embed-react";
import { FiCalendar } from "react-icons/fi";
import MeetingStyle from "../styles/meeting";
const Meeting = () => {
    const calConfig = {
        layout: "month_view",
        theme: "light",
    };

    return (
        <MeetingStyle className="scheduling-section">
            <div className="scheduling-header">
                <FiCalendar className="scheduling-icon" />
                <h2>Schedule a Project Discussion</h2>
                <p>
                    Want to discuss your project idea or requirements? Pick a time that works for
                    you and let&apos;s connect to talk through it.
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
        </MeetingStyle>
    );
};

export default Meeting;
