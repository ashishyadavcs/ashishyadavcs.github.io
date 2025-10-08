'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyImage from '../MyImage';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const CardContainer = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled(MyImage)`
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--text);
  font-size: 1.25rem;
`;

const CardDescription = styled.p`
  color: var(--text);
  opacity: 0.8;
  margin-bottom: 1rem;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: var(--accent);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`;

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, demoUrl, codeUrl, slug } = project;
  
  return (
    <CardContainer
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 20px var(--shadow)'
      }}
    >
      <Link href={`/projects/${slug}`} passHref style={{ textDecoration: 'none' }}>
        <ImageContainer>
          <CardImage 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </ImageContainer>
      </Link>
      
      <CardContent>
        <Link href={`/projects/${slug}`} passHref style={{ textDecoration: 'none' }}>
          <CardTitle>{title}</CardTitle>
        </Link>
        
        <CardDescription>{description}</CardDescription>
        
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        
        <CardLinks>
          {demoUrl && (
            <CardLink 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> Live Demo
            </CardLink>
          )}
          
          {codeUrl && (
            <CardLink 
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> Code
            </CardLink>
          )}
        </CardLinks>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;