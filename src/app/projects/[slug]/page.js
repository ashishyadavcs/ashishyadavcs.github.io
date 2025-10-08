'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyImage from '../../components/MyImage';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { projects } from '@/app/utils/data';
import Button from '@/app/components/common/Button';
import { fadeIn } from '@/app/utils/motion';

const ProjectContainer = styled.div`
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

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  margin-top: 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    text-decoration: none;
  }
`;

const ProjectSection = styled.section`
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: var(--accent);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: none;
  }
`;

const ProjectImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px var(--shadow);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProjectContent = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--text);
  }
  
  p {
    margin-bottom: 1.5rem;
    color: var(--text);
    line-height: 1.7;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  code {
    background-color: var(--accent);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: var(--font-geist-mono);
    font-size: 0.9rem;
  }
  
  pre {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

export default function ProjectPage({ params }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find(p => p.slug === params.slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        setNotFound(true);
      }
    }
  }, [params.slug]);
  
  if (notFound) {
    return (
      <Container style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist.</p>
        <BackButton href="/projects">
          <FiArrowLeft /> Back to Projects
        </BackButton>
      </Container>
    );
  }
  
  if (!project) {
    return (
      <Container style={{ paddingTop: '150px', textAlign: 'center' }}>
        <p>Loading...</p>
      </Container>
    );
  }
  
  return (
    <ProjectContainer>
      <HeroSection>
        <HeroContent>
          <Breadcrumb>
            <Link href="/">Home</Link> / <Link href="/projects">Projects</Link> / <span>{project.title}</span>
          </Breadcrumb>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </HeroTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tags>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
          </motion.div>
          <BackButton href="/projects">
            <FiArrowLeft /> Back to Projects
          </BackButton>
        </HeroContent>
      </HeroSection>
      
      <ProjectSection>
        <Container>
          <ProjectImageContainer
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MyImage 
              src={project.image} 
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ProjectImageContainer>
          
          <ProjectHeader>
            <ProjectTitle
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {project.title}
            </ProjectTitle>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {project.description}
            </motion.p>
            
            <ProjectLinks>
              {project.demoUrl && (
                <Button as="a" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo <FiExternalLink style={{ marginLeft: '0.5rem' }} />
                </Button>
              )}
              
              {project.codeUrl && (
                <Button secondary as="a" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  View Code <FiGithub style={{ marginLeft: '0.5rem' }} />
                </Button>
              )}
            </ProjectLinks>
          </ProjectHeader>
          
          <ProjectContent
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </Container>
      </ProjectSection>
    </ProjectContainer>
  );
}