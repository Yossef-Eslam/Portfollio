import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Brand Builders GCC",
    description: "A comprehensive branding and digital solutions platform serving businesses across the GCC region. Focused on helping companies establish strong brand identities and digital presence.",
    url: "https://www.brandbuildersgcc.com/",
    tags: ["Web Development", "Branding", "Digital Solutions"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            A showcase of my work and contributions
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-primary/8 shadow-card group cursor-pointer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/12"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
