import { useState } from "react";


const technologies = [
  { id: "react", name: "React", description: "A declarative, component-based JavaScript library for building user interfaces.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "Frontend", level: "Beginner Friendly", rating: 4.9, badge: "Popular", badgeColor: "bg-blue-50 text-blue-600" },

  { id: "svelte", name: "Svelte", description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg", category: "Frontend", level: "Intermediate", rating: 4.8, badge: "Fast", badgeColor: "bg-orange-50 text-orange-600" },
  { id: "next", name: "Next.js", description: "The React Framework for the Web with hybrid static & server rendering.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", category: "Frontend", level: "Intermediate", rating: 4.9, badge: "", badgeColor: "" },
  { id: "node", name: "Node.js", description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "Backend", level: "Intermediate", rating: 4.8, badge: "Standard", badgeColor: "bg-emerald-50 text-emerald-600" },
  { id: "postgresql", name: "PostgreSQL", description: "A powerful, open-source object-relational database system with proven reliability.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", category: "Database", level: "Intermediate", rating: 4.9, badge: "Top SQL", badgeColor: "bg-blue-50 text-blue-600" },
  { id: "redis", name: "Redis", description: "In-memory data structure store used as a high-speed database, cache, and message broker.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", category: "Database", level: "Intermediate", rating: 4.8, badge: "Cache", badgeColor: "bg-red-50 text-red-600" },
  { id: "javascript", name: "JavaScript", description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", category: "Language", level: "Beginner Friendly", rating: 4.9, badge: "Ubiquitous", badgeColor: "bg-amber-50 text-amber-600" },
  { id: "typescript", name: "TypeScript", description: "A strongly typed programming language that builds on JavaScript for robust tooling.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", category: "Language", level: "Intermediate", rating: 4.9, badge: "Essential", badgeColor: "bg-blue-50 text-blue-600" },
  { id: "java", name: "Java", description: "A classic, object-oriented programming language designed for portability and scale.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", category: "Language", level: "Intermediate", rating: 4.6, badge: "Robust", badgeColor: "bg-sky-50 text-sky-600" },
  { id: "tailwind", name: "Tailwind CSS", description: "A utility-first CSS framework packed with classes that can be composed to build custom designs.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", category: "Styling", level: "Beginner Friendly", rating: 4.9, badge: "Modern", badgeColor: "bg-cyan-50 text-cyan-600" },
  { id: "docker", name: "Docker", description: "A platform designed to build, share, and run containerized applications reliably.", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", category: "DevOps", level: "Intermediate", rating: 4.9, badge: "Containers", badgeColor: "bg-blue-50 text-blue-600" },
];

export default function Grid() {
  const [selectedStack, setSelectedStack] = useState<typeof technologies>([]);

  
  const handleAddToStack = (tech: typeof technologies[0]) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  
  const handleRemoveFromStack = (techId: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
  };

  
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        
        
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
                >
                  <div>
                    
                    {tech.badge && (
                      <span
                        className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tech.badgeColor}`}
                      >
                        {tech.badge}
                      </span>
                    )}

                    
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 p-1">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="h-7 w-7 object-contain"
                        />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">
                        {tech.name}
                      </h3>
                    </div>

                    <p className="mb-6 text-xs leading-relaxed text-gray-500">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                   
                    <div className="mb-4 flex items-center justify-between text-[11px] text-gray-400">
                      <span>{tech.category}</span>
                      <span>{tech.level}</span>
                      <div className="flex items-center gap-1 font-semibold text-gray-700">
                        <span className="text-amber-400">★</span>
                        <span>{tech.rating}</span>
                      </div>
                    </div>

                    
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold transition ${
                        isAdded
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-[#0f172a] text-white hover:bg-slate-800"
                      }`}
                    >
                      {isAdded ? "Added to Stack" : "+ Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="h-fit w-full rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm lg:w-72">
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-base font-bold text-gray-900">Your Stack</h2>
            <span className="text-xs text-gray-400">
              {selectedStack.length} selected
            </span>
          </div>

          <div className="space-y-3">
            {selectedStack.length === 0 ? (
              <p className="py-8 text-center text-xs text-gray-400">
                Select technologies to build your stack.
              </p>
            ) : (
              selectedStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between rounded-xl bg-gray-50 p-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-xs font-semibold text-gray-800">
                      {tech.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveFromStack(tech.id)}
                    className="text-xs text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {selectedStack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="mt-6 w-full text-center text-xs font-semibold text-rose-500 hover:text-rose-600"
            >
              Remove All
            </button>
          )}
        </div>

      </div>
    </div>
  );
}