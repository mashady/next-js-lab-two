export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          I'm a full-stack developer with 5 years of experience building web applications. 
          I specialize in JavaScript technologies across the whole stack.
        </p>
        <p className="mb-4">
          My passion is creating efficient, scalable, and user-friendly solutions 
          that solve real-world problems.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <li className="bg-gray-100 px-3 py-2 rounded">JavaScript</li>
          <li className="bg-gray-100 px-3 py-2 rounded">React</li>
          <li className="bg-gray-100 px-3 py-2 rounded">Next.js</li>
          <li className="bg-gray-100 px-3 py-2 rounded">Node.js</li>
          <li className="bg-gray-100 px-3 py-2 rounded">TypeScript</li>
          <li className="bg-gray-100 px-3 py-2 rounded">Tailwind CSS</li>
        </ul>
      </div>
    </div>
  )
}