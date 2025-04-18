import React, {useState} from 'react';




function Experience() {
    const [openIndex, setOpenIndex] = useState(null);

    const experiences = [
      {
        image: 'kodiprint.png',
        company: 'kodiprint AB',
        title: 'Co-founder and CEO',
        date: 'Fall 24-Now',
        description: 'Building an AI printing platform for smart photo products.',
        titleExp: 'Managing and building the platform',
        skills: 'React, Vue, Angular'
      },
      {
        image: 'OmegaPoint.png',
        company: 'OmegaPoint AB',
        title: 'Master thesis',
        date: 'Fall 24',
        description: 'This study examines the environmental impact of Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in popular front-end frameworks—Angular, React, and Vue. With the increasing emphasis on sustainable software development, this research focuses on energy consumption across rendering techniques to identify the most sustainable web application design. Six web applications were created using the most popular frameworks: Angular, React, and Vue - with each being implemented in two different setups of rendering techniques, CSR and SSR. Using GreenFrame, a tool for full-stack energy analysis, the different web applications were tested under controlled conditions, comparing energy metrics such as CPU, memory, and network usage on both client and server sides. Results reveal that Vue consistently demonstrated the lowest energy consumption, particularly in CSR configurations. While CSR and SSR showed minimal statistical differences overall, framework-specific trends emerged. The findings contribute to the growing body of research in green coding and provide actionable insights for developers seeking energy-efficient web solutions.',
        titleExp: 'Environmental Impact Between Client-Side Rendering And Server-Side Rendering In Popular Front-end Frameworks: A comparative analysis',
        skills: 'React, Vue, Angular'
      },
      {
        image: 'nasdaq.jpeg',
        company: 'Nasdaq',
        title: 'QA Engineer Intern',
        date: 'Summer 24',
        description: 'Worked as an intern within a team for their risk product Nasdaq NRTC CCP. Initially I built tests for their backend code, but gained more responsibility of maintining and building their UI in React. ',
        titleExp: 'Managing and building the platform',
        skills: 'Java, React, Kafka'
      },
      {
        image: 'UMU.png',
        company: 'Umeå University',
        title: 'Tutor - Data structures and Algorithms',
        date: 'Spring 24',
        description: 'Helping students understand algorithms and coding concepts.',
        titleExp: 'Managing and building the platform',
        skills: 'React, Vue, Angular'
      },
      {
        image: 'x-logga.png',
        company: 'bXhaled Sport AB',
        title: 'Co-founder',
        date: '2021-Now',
        description: 'Family business were we sell our patented water bottle on multiple marketplaces on mainly Amazon.',
        titleExp: 'Operational responsibility',
        skills: 'React, Amazon Seller, Shopify, Business Administration'
      },
      {
        image: 'softhouse.jpeg',
        company: 'Softhouse Neava',
        title: 'UX and frontend developer',
        date: 'Summer 23',
        description: 'Designed and built web interfaces with a focus on usability.',
        titleExp: 'Managing and building the platform',
        skills: 'React, Vue, Angular'
      },
      {
        image: 'umu.png',
        company: 'Umeå University | Northstat',
        title: 'Backend developer',
        date: 'Summer 23',
        description: 'Developed APIs and backend logic for university projects.',
        titleExp: 'Managing and building the platform',
        skills: 'React, Vue, Angular'
      }
    ];
    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      return (
        <div className="popup-content">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className='popup-content-row' onClick={() => toggleDropdown(index)}>
                <img src={exp.image} />
                <h1>{exp.title}</h1>
                <h1 className='date'>{exp.date}</h1>
                <h1 className='arrow'>{openIndex === index ? '−' : '+'}</h1>
              </div>
              {openIndex === index && (
                <div className="popup-dropdown-content">
                    <div className="popup-dropdown-content-company">
                        <h1 style={{color:'blue'}}>{exp.company}</h1>
                    </div>
                    <div className="popup-dropdown-content-title">
                        <h2>{exp.titleExp}</h2>
                        <h2 style={{marginLeft:'50px', color:'rgb(62, 62, 62)'}}>{exp.skills}</h2>
                    </div>
                    <div className="popup-dropdown-content-description">
                        <p>{exp.description}</p>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

export default Experience;
