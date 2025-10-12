"use client";

import { useEffect } from "react";
import { generateStructuredData } from "@/app/utils/structured-data";

export default function StructuredData({ page = "home", data = {} }) {
    useEffect(() => {
        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => script.remove());

        const structuredData = generateStructuredData(page, data);

        if (structuredData) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.innerHTML = JSON.stringify(structuredData, null, 2);
            document.head.appendChild(script);
        }

        return () => {
            // Cleanup on unmount
            const scripts = document.querySelectorAll('script[type="application/ld+json"]');
            scripts.forEach(script => script.remove());
        };
    }, [page, data]);

    return null;
}
