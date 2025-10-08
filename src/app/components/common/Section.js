'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  text-align: ${props => props.$centered ? 'center' : 'left'};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--secondary);
  max-width: ${props => props.$centered ? '600px' : 'none'};
  margin: ${props => props.$centered ? '0 auto' : '0'};
`;

const Section = ({
  id,
  title,
  subtitle,
  children,
  centered = false,
  className = '',
  ...props
}) => {
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
            {subtitle && <SectionSubtitle $centered={centered}>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </SectionInner>
    </SectionContainer>
  );
};

export default Section;