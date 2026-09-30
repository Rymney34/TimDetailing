export default function PortfolioDetail({ projectsData, params }) {
    const [, setLocation] = useLocation();

    // Находим нужный проект по ID из параметров URL
    const project = projectsData.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Project Not found</h2>
                <button
                    onClick={() => setLocation('/')}
                    className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-colors"
                >
                    Return to Home Page
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Кнопка возврата назад */}
                <button
                    onClick={() => setLocation('/')}
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home page
                </button>

                {/* Шапка проекта */}
                <div className="mb-8">
                    <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30 mb-3">
                        {project.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {project.title}
                    </h1>
                    <p className="mt-3 text-lg text-gray-300">
                        {project.summary}
                    </p>
                </div>

                {/* Слайдер "До / После" */}
                {project.beforeImage && project.afterImage && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-blue-400" /> Intreactive Comparsion (before/ after)
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">Move cursor from left to right.</p>
                        <BeforeAfterSlider beforeImg={project.beforeImage} afterImg={project.afterImage} />
                    </div>
                )}

                {/* Описание и выполненная работа */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-bold text-white">Realisation Details</h3>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl h-fit">
                        <h4 className="text-lg font-semibold text-white mb-4">What Have Been Done</h4>
                        <ul className="space-y-3">
                            {project.workDone?.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Дополнительная галерея изображений */}
                {project.gallery && project.gallery.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Additional Images</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.gallery.map((imgUrl, index) => (
                                <div key={index} className="overflow-hidden rounded-xl border border-gray-800 shadow-lg h-60">
                                    <img src={imgUrl} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}