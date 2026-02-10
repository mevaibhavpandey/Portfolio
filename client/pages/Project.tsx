import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function Project() {
  const { id } = useParams();

  const projectDetails: Record<string, any> = {
    "2": {
      title: "Radar-style Air Defence Missile Simulation",
      emoji: "🛰️",
      description: "A real-time, interactive Streamlit application that simulates radar tracking and missile guidance using a simplified proportional navigation algorithm.",
      fullDescription: `This project demonstrates advanced defense technology concepts through an interactive simulation environment. It visualizes missile and target trajectories on a radar-style display with real-time calculations and trajectory predictions.`,
      
      features: [
        {
          title: "Interactive Radar Interface",
          description: "Real-time plotting of targets and missiles on a radar-style display with smooth animation and adjustable zoom."
        },
        {
          title: "Multiple Threat Handling",
          description: "Add multiple targets with user-defined positions and velocities. Each missile autonomously intercepts its assigned target."
        },
        {
          title: "Proportional Navigation Guidance",
          description: "Simulates realistic missile pursuit using the navigation constant (N) with dynamic heading and velocity updates."
        },
        {
          title: "Engagement Reporting",
          description: "Automatically logs neutralized threats with hit time and coordinates. Displays live and final results in dynamic tables."
        },
        {
          title: "Customizable Parameters",
          description: "Adjustable radar sweep speed, missile velocity, detection radius, and zoom settings."
        },
        {
          title: "Lightweight & Portable",
          description: "100% Python, runs locally or on Streamlit Cloud with minimal dependencies."
        }
      ],

      howItWorks: [
        "Add a threat with given position (Pos X, Pos Y) and velocity (Vel X, Vel Y)",
        "Each missile launches from origin (0, 0) toward its target",
        "The simulation updates every dt seconds",
        "Calculates relative position and velocity vectors",
        "Computes line-of-sight rate and adjusts missile heading using Proportional Navigation (PN)",
        "If distance < hit_distance, the target is marked neutralized",
        "All trajectories and results are displayed in real-time on the radar"
      ],

      techStack: [
        "Python 3.8+",
        "Streamlit - Web application framework",
        "Pandas - Data manipulation and analysis",
        "NumPy - Numerical computations",
        "Matplotlib - Data visualization",
        "Plotly - Interactive charts"
      ],

      useCases: [
        "Defense training simulations",
        "Naval and air defense training demonstrations",
        "Defense technology academic projects",
        "Aerospace engineering education",
        "Military research and development",
        "Hackathons & innovation challenges"
      ],

      keyAlgorithms: [
        {
          name: "Proportional Navigation (PN)",
          description: "The core guidance law that commands the missile to turn proportional to the rate of change of line-of-sight angle."
        },
        {
          name: "Vector Mathematics",
          description: "Calculates relative positions, velocities, and future trajectory predictions."
        },
        {
          name: "Collision Detection",
          description: "Determines hit conditions based on distance thresholds and relative positioning."
        }
      ],

      parameters: [
        { name: "Navigation Constant (N)", value: "Adjustable (typically 3-5)", description: "Controls missile turn rate responsiveness" },
        { name: "Missile Velocity", value: "Configurable (m/s)", description: "Speed of missile pursuit" },
        { name: "Detection Radius", value: "Adjustable (km)", description: "Maximum engagement range" },
        { name: "Simulation Time Step", value: "dt (seconds)", description: "Update frequency for calculations" }
      ]
    }
  };

  const project = projectDetails[id || "2"];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            VP
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold">
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-container max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-2xl">{project.emoji}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature: any, idx: number) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">How It Works</h2>
        <div className="space-y-4">
          {project.howItWorks.map((step: string, idx: number) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-bold text-accent text-lg">{idx + 1}</span>
              </div>
              <div className="flex-grow pt-1">
                <p className="text-muted-foreground text-lg">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Algorithms */}
      <section className="section-container bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-primary">Core Algorithms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.keyAlgorithms.map((algo: any, idx: number) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-bold text-primary mb-3">{algo.name}</h3>
                <p className="text-muted-foreground">{algo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="section-container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Simulation Parameters</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-accent">
                <th className="text-left py-3 px-4 font-bold text-primary">Parameter</th>
                <th className="text-left py-3 px-4 font-bold text-primary">Range</th>
                <th className="text-left py-3 px-4 font-bold text-primary">Description</th>
              </tr>
            </thead>
            <tbody>
              {project.parameters.map((param: any, idx: number) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-primary">{param.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{param.value}</td>
                  <td className="py-4 px-4 text-muted-foreground">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-container bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string, idx: number) => (
              <span key={idx} className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm border border-accent/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Applications & Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.useCases.map((useCase: string, idx: number) => (
            <div key={idx} className="p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
              <p className="text-muted-foreground">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with CTA */}
      <section className="section-container bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Interested in Defense Technology?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This project showcases real-time simulation capabilities and defense systems architecture. Explore my other projects and get in touch!
          </p>
          <Link to="/" className="btn-primary">
            Explore More Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
