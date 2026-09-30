import React from 'react';
import PortfolioCard from './portfolioCard';

export default function PortfolioGrid({ projects }) {
    if (!projects || projects.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400">
                <p>No projects found.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
            ))}
        </div>
    );
}