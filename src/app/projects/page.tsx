'use client';

import HeroProjects from '@/components/custom/projects/Hero';
import { AnimatePresence, motion } from 'motion/react';
import { projectsData } from '@/data';
import { ProjectCard } from '@/components/custom/ProjectsCard';
import Filters, { FilterTab } from '@/components/custom/projects/ProjectFilter';
import { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import SkillsCTA from '@/components/custom/skill/SkillsCTA';

function matchesFilter(filter: FilterTab, project: (typeof projectsData)[number]): boolean {
  if (filter === 'All') return true;
  if (filter === 'Featured') return project.features;
  return project.categories.includes(filter);
}

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [page, setPage] = useState(1);

  const filteredProjects = projectsData.filter((p) => matchesFilter(activeFilter, p));
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  // Reset to page 1 whenever filter changes
  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  const paginatedProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  // Build visible page numbers (max 5 shown with ellipsis)
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 3) {
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = page - 1; i <= page + 1; i++) pages.push(i);
      pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <main className="relative bg-slate-950 py-10 min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <HeroProjects />
        {/* projects  */}
        <div>
          <Filters active={activeFilter} onChange={setActiveFilter} />
          <ProjectsGrid projects={paginatedProjects} />

          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      text=""
                      href="#"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        goTo(page - 1);
                      }}
                      className={page === 1 ? 'pointer-events-none opacity-40' : ''}
                    />
                  </PaginationItem>

                  {getVisiblePages().map((p, i) =>
                    p === 'ellipsis' ? (
                      <PaginationItem key={`ellipsis-${i}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={p}>
                        <PaginationLink
                          href="#"
                          isActive={page === p}
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            goTo(p);
                          }}
                          className={
                            page === p
                              ? 'bg-indigo-600 border-indigo-500/50 text-white hover:bg-indigo-600 hover:text-white'
                              : 'text-white hover:bg-white/10 hover:text-white'
                          }
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      text=""
                      href="#"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        goTo(page + 1);
                      }}
                      className={page === totalPages ? 'pointer-events-none opacity-40' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </motion.div>
          )}
        </div>
        <SkillsCTA />
      </div>
    </main>
  );
}

function ProjectsGrid({ projects }: { projects: typeof projectsData }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      <AnimatePresence mode="popLayout">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: -20 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 22,
                mass: 1.2,
                delay: index * 0.12,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-full text-center py-20 text-white/60"
          >
            No projects found for this filter.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
