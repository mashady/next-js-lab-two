export default async function Home() {
  // Simulate fetching user profile data
  const userProfile = await getUserProfile();
  
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">{userProfile.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{userProfile.bio}</p>
        <div className="flex space-x-4">
          <a href="/projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View My Work
          </a>
          <a href="/contact" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img 
          src={userProfile.image} 
          alt={userProfile.name} 
          className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
        />
      </div>
    </div>
  )
}

// Simulated API call for user profile data
async function getUserProfile() {
  // In a real app, you might fetch from an API
  return {
    name: "hhhhhhhhhhhhh",
    bio: "A passionate web developer creating beautiful, functional websites and applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    skills: ["JavaScript", "React", "Next.js", "Node.js"]
  };
}