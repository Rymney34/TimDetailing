import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PortfolioCard({ project }) {
    const [, setLocation] = useLocation();

    return (
        <div
            onClick={() => setLocation(`/project/${project.id}`)}
            className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm line-clamp-2 flex-grow">
                    {project.summary}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform">
                    Inspect Case <ExternalLink className="w-4 h-4 ml-1.5" />
                </div>
            </div>
        </div>
    );
}