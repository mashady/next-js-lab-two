export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-lg mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> contact@example.com</p>
            <p><span className="font-medium">LinkedIn:</span> linkedin.com/in/yourprofile</p>
            <p><span className="font-medium">GitHub:</span> github.com/yourusername</p>
          </div>
        </div>
      </div>
    </div>
  )
}