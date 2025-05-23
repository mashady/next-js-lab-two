import Link from 'next/link'

async function getProjects() {
  return [
    { id: 1, title: "E-commerce Platform", description: "A full-featured online store with payment integration", tags: ["React", "Node.js", "MongoDB"] },
    { id: 2, title: "Task Management App", description: "A productivity app for team collaboration", tags: ["Next.js", "Firebase"] },
    { id: 3, title: "Portfolio Website", description: "A responsive portfolio site for a photographer", tags: ["HTML/CSS", "JavaScript"] },
  ];
}

export default async function Projects() {
  const projects = await getProjects();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Link 
            href={`/projects/${project.id}`}
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}