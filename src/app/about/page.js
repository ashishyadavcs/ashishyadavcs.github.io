'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyImage from '../components/MyImage';
import { FiBriefcase, FiCode, FiDatabase, FiGlobe, FiServer, FiSmartphone } from 'react-icons/fi';
import Section from '@/app/components/common/Section';
import { fadeIn } from '@/app/utils/motion';
import Button from '@/app/components/common/Button';
import {contacts, data} from 'public/data/aboutme';

const AboutContainer = styled.div`
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

const BioSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BioImage = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--shadow);
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const BioContent = styled(motion.div)``;

const BioDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  div {
    p:first-child {
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: var(--text);
    }
    
    p:last-child {
      color: var(--secondary);
    }
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px var(--shadow);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      color: var(--primary);
      margin-right: 0.5rem;
    }
  }
`;

const ExperienceContainer = styled.div``;

const TimelineContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--card-border);
    
    @media (max-width: 768px) {
      left: 8px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 2.5rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--primary);
  
  @media (max-width: 768px) {
    left: 2px;
  }
`;

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--accent);
  border-radius: 4px;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.div`
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: var(--secondary);
`;

export default function About() {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FiCode />,
      items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Redux", "Styled Components"]
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      items: ["Node.js", "Express", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <FiDatabase />,
      items: ["MongoDB"]
    },
    {
      title: "Mobile Development",
      icon: <FiSmartphone />,
      items: ["React Native", "Responsive Design", "Progressive Web Apps"]
    },
    {
      title: "DevOps & Tools",
      icon: <FiBriefcase />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Testing"]
    },
    {
      title: "Other Skills",
      icon: <FiGlobe />,
      items: ["UI/UX Design", "Agile Methodology", "Team Leadership", "Technical Writing"]
    }
  ];
  
  const experiences = [
    {
      date: "2022 - Present",
      title: "Software Engineer",
      company: "BOLD Technology systems",
      description: "Lead the frontend development team in building scalable web applications using React and Next.js. Improved site performance by 40% and implemented CI/CD pipelines."
    },
    {
      date: "2021 - 2022",
      title: "Frontend Developer",
      company: "Tutorbin",
      description: "Developed full-stack web applications using the MERN stack. Created RESTful APIs and worked on database design and optimization."
    }
  ];
  
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <Breadcrumb>
            <a href="/">Home</a> / <span>About Me</span>
          </Breadcrumb>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </HeroTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Learn more about my journey, skills, and experiences
          </motion.p>
        </HeroContent>
      </HeroSection>
      
      <Section id="bio">
        <BioSection>
          <BioImage
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MyImage 
              src={data.image} 
              alt="Professional headshot" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </BioImage>
          
          <BioContent
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2>I'm Your Name, a Full-Stack Developer</h2>
            <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              I'm a passionate full-stack developer with over 5 years of experience in building web applications.
              I specialize in creating responsive, user-friendly websites and applications using modern technologies.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              My journey in web development began during college where I built my first website for a local business.
              Since then, I've worked with startups, agencies, and established companies to create digital solutions
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks
              and libraries. I'm always eager to learn and stay updated with the latest industry trends.
            </p>
            
            <BioDetails>
              <div>
                <p>Name</p>
                <p>{contacts.name}</p>
              </div>
              <div>
                <p>Email</p>
                <p>{contacts.email}</p>
              </div>
              <div>
                <p>Phone</p>
                <p>{contacts.phone}</p>
              </div>
              <div>
                <p>Location</p>
                <p>{contacts.address}</p>
              </div>
              <div>
                <p>Availability</p>
                <p>Freelance / Full-time</p>
              </div>
              <div>
                <p>Experience</p>
                <p>4.6+ Years</p>
              </div>
            </BioDetails>
            
            <Button style={{ marginTop: '2rem' }}>
              Download Resume
            </Button>
          </BioContent>
        </BioSection>
      </Section>
      
      <Section 
        id="skills"
        title="My Skills"
        subtitle="Technologies and tools I work with"
        style={{ background: 'var(--accent)' }}
      >
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Section>
      
      <Section 
        id="experience"
        title="Work Experience"
        subtitle="My professional journey"
      >
        <ExperienceContainer>
          <TimelineContainer>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <TimelineDot />
                <TimelineDate>{exp.date}</TimelineDate>
                <TimelineTitle>{exp.title}</TimelineTitle>
                <TimelineCompany>{exp.company}</TimelineCompany>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </ExperienceContainer>
      </Section>
    </AboutContainer>
  );
}