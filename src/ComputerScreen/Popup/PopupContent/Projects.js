import React, { useState } from 'react';

function Projects() {
    
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      image: 'favicon.ico',
      company: 'By myself',
      title: 'This portfolio',
      date: 'Spring 25',
      description: "I built an interactive 3D portfolio website to showcase my work in a more engaging and immersive way. Using Three.js for the 3D rendering and Blender for modeling. The website is powered by React and Next.js (soon), enabling fast performance, server-side rendering, and seamless navigation. This project challenged me to combine creative design with technical implementation – from 3D asset optimization to handling shaders and camera logic. It's more than just a portfolio; it’s a digital experience that demonstrates my front-end skills, aesthetic eye, and passion for modern web technologies.",
      titleExp: '3d portfolio',
      skills: 'React, ThreeJS, NextJS, Blender'
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
      image: 'school.png',
      company: 'School project',
      title: 'AR - Memory',
      date: 'Spring 23',
      description: "As part of a group project, we developed an Augmented Reality (AR) memory game where users can play in a real-world environment using their device’s camera. The game was built in Unity using C#, with a SQL database to store user scores. To handle communication between the game and the database, we implemented a RESTful API using ASP.NET Core. This allowed for secure and efficient data transfer, such as submitting and retrieving high scores. The project combined immersive AR gameplay with backend integration, providing both technical and user experience challenges.",
      titleExp: 'AR - Memory Game',
      skills: 'Unity, C#, SQL Database, REST API (ASP.NET Core)',
      video:'./videos/MemoryAR.mp4'
    },
    {
      image: 'x-logga.png',
      company: 'bXhaled Sport',
      title: 'Business website',
      date: 'Fall 23',
      description: "A website for a family business. In the process of developing a product configurator and headless store connected to shopify.",
      titleExp: 'AR - Memory Game',
      skills: 'React',
    },
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
            <h3>{exp.title}</h3>

            <h3 className={`arrow ${openIndex === index ? 'open' : ''}`}>{'>'}</h3>
          </div>
          {openIndex === index && (
            <div className="popup-dropdown-content">
                <div className="popup-dropdown-content-container">
                  <div className="popup-dropdown-content-company">
                      <h2 style={{color:'blue'}}>{exp.company}</h2>
                  </div>
                  <div className="popup-dropdown-content-title">
                      <h3>{exp.date}</h3>
                      <h3 style={{marginLeft:'50px', color:'rgb(62, 62, 62)'}}>{exp.skills}</h3>
                  </div>
                  <div className="popup-dropdown-content-description">
                      <p>{exp.description}</p>
                  </div>
                  {exp.video && (
                  <div className="popup-dropdown-content-video" style={{ marginTop: '20px' }}>
                    <video controls>
                      <source src={exp.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>)}
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
