import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  Code2,
  Zap,
  Target,
} from "lucide-react";

export default function Index() {
  const projects = [
    {
      id: 1,
      title: "Maritime Situational Awareness",
      description:
        "Real-time vessel tracking for India's 200-NM maritime defense boundary with AIS simulation and automated threat detection.",
      tech: ["Python", "Streamlit", "Folium", "SQLite", "Scikit-learn"],
      link: "https://mevaibhavpandey.github.io/Maritime-Situational-Awareness/",
      highlights: [
        "Real-time vessel tracking",
        "Anomaly detection",
        "Piracy alerts",
        "Boundary analysis",
      ],
    },
    {
      id: 2,
      title: "Radar-style Air Defence Missile Simulation",
      description:
        "Interactive radar simulation for missile interception using Proportional Navigation Guidance algorithm implementation.",
      tech: ["Python", "Streamlit", "Pandas", "NumPy"],
      link: "/project/2",
      highlights: [
        "PNG algorithm",
        "Radar visualization",
        "Threat tracking",
        "Engagement reporting",
      ],
    },
    {
      id: 3,
      title: "Indian Military Operations Timeline",
      description:
        "Interactive visualization of major Indian military battles and strategic operations from 1947 to modern times.",
      tech: ["HTML5", "CSS3", "JavaScript", "Leaflet.js"],
      link: "https://mevaibhavpandey.github.io/indian-military-operations-timeline/",
      highlights: [
        "Interactive timeline",
        "Military history",
        "Geographic visualization",
        "Educational content",
      ],
    },
  ];

  const skills = {
    Programming: ["Python", "C/C++", "Java", "SQL", "JavaScript"],
    "Data & AI": [
      "Machine Learning",
      "Anomaly Detection",
      "Data Visualization",
      "Geospatial Mapping",
    ],
    "Tools & Frameworks": [
      "Streamlit",
      "Folium",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SQLite",
    ],
    "Defense-Tech": [
      "Maritime Situational Awareness",
      "Real-time Monitoring",
      "Threat Assessment",
    ],
  };

  const achievements = [
    {
      label: "NDA 153rd Course",
      value: "AIR 31",
      branch: "Fighter Pilot, IAF",
    },
    { label: "TES-52nd Course", value: "AIR 50", branch: "Indian Army" },
    { label: "Basketball", value: "Gold Medalist", branch: "National Level" },
    { label: "Hackathon", value: "2nd Place", branch: "InCSEption" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            VP
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mevaibhavpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/vaibhav-pandey-7ba67033a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/mevaibhavpandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-sm font-semibold text-accent">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              Vaibhav Pandey
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Computer Science Engineering student at BMSIT&M with a passion for
              defence technology, maritime systems, and building intelligent
              solutions. NDA and TES qualified with national-level athletic
              achievements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a
                href="mailto:vaibhav.pandey1661@gmail.com"
                className="btn-secondary"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="animate-float w-full h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center">
                <Code2 size={80} className="text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Building innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 text-lg">
              I'm a final-year CSE student at BMS Institute of Technology and
              Management, deeply passionate about defence technology, geospatial
              intelligence, and real-time monitoring systems. My work focuses on
              creating intelligent solutions for complex maritime and defense
              challenges.
            </p>
            <p className="mb-6 text-lg">
              With a background in software development and data science, I've
              built systems ranging from real-time vessel tracking platforms to
              missile guidance simulations. My projects demonstrate expertise in
              full-stack development, geospatial analysis, and decision-support
              systems.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="text-sm text-muted-foreground font-semibold">
                    {achievement.label}
                  </div>
                  <div className="text-2xl font-bold text-primary my-2">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-accent font-semibold">
                    {achievement.branch}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Zap size={20} className="text-accent" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group h-full p-6 bg-card rounded-lg border border-border hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2"
                  />
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-primary mb-2">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-primary mb-2">
                    Highlights
                  </div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <Target
                          size={14}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.link}
                  target={
                    project.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    project.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors text-sm"
                >
                  {project.link.startsWith("http")
                    ? "View Live"
                    : "View Details"}
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of these channels.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <a href="mailto:vaibhav.pandey1661@gmail.com" className="btn-primary">
            <Mail size={20} className="mr-2" />
            Email Me
          </a>
          <a
            href="https://github.com/mevaibhavpandey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vaibhav-pandey-7ba67033a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-border text-sm text-muted-foreground">
          <p>
            © 2024 Vaibhav Pandey. All rights reserved. | Computer Science
            Engineering Student at BMSIT&M
          </p>
        </div>
      </section>
    </div>
  );
}
