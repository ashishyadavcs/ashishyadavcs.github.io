'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '@/app/utils/data';
import ProjectCard from '@/app/components/common/ProjectCard';
import { fadeIn } from '@/app/utils/motion';

const ProjectsContainer = styled.div`
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

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  background: ${props => props.$active ? 'var(--primary)' : 'var(--card-bg)'};
  color: ${props => props.$active ? 'white' : 'var(--text)'};
  border: ${props => props.$active ? 'none' : '1px solid var(--card-border)'};
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? 'var(--primary)' : 'var(--accent)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Projects() {
  // Extract all unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const [activeFilter, setActiveFilter] = useState('All');
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <ProjectsContainer>
      <HeroSection>
        <HeroContent>
          <Breadcrumb>
            <a href="/">Home</a> / <span>Projects</span>
          </Breadcrumb>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </HeroTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore my recent work and creative solutions
          </motion.p>
        </HeroContent>
      </HeroSection>
      
      <ProjectsSection>
        <Container>
          <FiltersContainer>
            <FilterButton 
              $active={activeFilter === 'All'} 
              onClick={() => handleFilterClick('All')}
            >
              All
            </FilterButton>
            {allTags.map((tag, index) => (
              <FilterButton 
                key={index}
                $active={activeFilter === tag}
                onClick={() => handleFilterClick(tag)}
              >
                {tag}
              </FilterButton>
            ))}
          </FiltersContainer>
          
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>
    </ProjectsContainer>
  );
}