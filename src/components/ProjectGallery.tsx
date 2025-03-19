
import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  className?: string;
}

const ProjectGallery = ({ projects, className }: ProjectGalleryProps) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(project => project.category)));

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  const openProject = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={className}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setFilter(null)}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium focus-transition",
            filter === null
              ? "bg-onward text-white"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          )}
        >
          Alle projecten
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium focus-transition",
              filter === category
                ? "bg-onward text-white"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-xl cursor-pointer hover-lift"
            onClick={() => openProject(project)}
          >
            <div className="relative aspect-square">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeProject}>
          <div 
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 focus-transition"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative aspect-video">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold">{activeProject.title}</h3>
              <p className="text-muted-foreground">{activeProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
