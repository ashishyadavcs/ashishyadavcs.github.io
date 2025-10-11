import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/app/config/media";

export const SectionContainer = styled(motion.section)`
    padding: 5rem 2rem;
    width: 100%;

    ${media.sm} {
        padding: 4rem 1rem;
    }

    ${media.xs} {
        padding: 3rem 0.75rem;
    }

    @media (max-width: 320px) {
        padding: 2rem 0.5rem;
    }
`;

export const SectionInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

export const SectionHeader = styled.div`
    margin-bottom: 3rem;
    text-align: ${props => (props.$centered ? "center" : "left")};
`;

export const SectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text);
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }

    ${media.sm} {
        font-size: 2rem;
    }

    ${media.xs} {
        font-size: 1.75rem;
    }

    @media (max-width: 480px) {
        font-size: 1.625rem;
    }
`;

export const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: var(--secondary);
    max-width: ${props => (props.$centered ? "600px" : "none")};
    margin: ${props => (props.$centered ? "0 auto" : "0")};
`;
