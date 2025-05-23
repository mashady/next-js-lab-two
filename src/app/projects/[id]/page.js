async function getProject(id) {
  const projects = [
    { 
      id: 1, 
      title: "E-commerce Platform", 
      description: "A full-featured online store with payment integration", 
      tags: ["React", "Node.js", "MongoDB"],
      details: "Built a complete e-commerce solution with product listings, cart functionality, user authentication, and Stripe payment integration. The platform serves over 10,000 monthly active users.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1672&q=80"
    },
    { 
      id: 2, 
      title: "Task Management App", 
      description: "A productivity app for team collaboration", 
      tags: ["Next.js", "Firebase"],
      details: "Developed a real-time task management application with drag-and-drop functionality, team assignments, and progress tracking. The app uses Firebase for authentication and real-time database updates.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    { 
      id: 3, 
      title: "Portfolio Website", 
      description: "A responsive portfolio site for a photographer", 
      tags: ["HTML/CSS", "JavaScript"],
      details: "Created a visually stunning portfolio website for a professional photographer, featuring a masonry image gallery, smooth animations, and contact form integration.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
  ];
  
  return projects.find(project => project.id === parseInt(id));
}

export default async function ProjectDetails({ params }) {
  const project = await getProject(params.id);
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div>
      <div className="mb-8">
        <a href="/projects" className="text-blue-600 hover:underline">&larr; Back to Projects</a>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{project.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <p className="mb-6">{project.details}</p>
          
          <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 inline-block"
          >
            Interested in this project? Contact me
          </a>
        </div>
      </div>
    </div>
  )
}