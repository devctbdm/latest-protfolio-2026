import { ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    sourceLink: string;
    badge: string;
    features: boolean;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge Overlay */}
        {project.badge && (
          <div className="absolute top-3 right-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            {project.badge}
          </div>
        )}

        {/* Features Badge */}
        {project.features && (
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => {
            const tagColors = [
              'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
              'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
              'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
              'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
              'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
              'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
              'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
            ];
            return (
              <span
                key={index}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${tagColors[index % tagColors.length]}`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>

          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span className="h-4 w-4">⚡</span>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
