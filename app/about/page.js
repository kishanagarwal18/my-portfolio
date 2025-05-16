export default function About() {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hello, I'm [Your Name]</h2>
              <p className="text-gray-600 text-lg mb-4">
                I am a passionate web developer with a focus on building modern web applications using
                technologies like React, Next.js, and Node.js. I enjoy creating user-friendly interfaces 
                and solving complex problems with clean, maintainable code.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                My goal is to continuously learn and grow as a developer while building impactful projects
                that make a difference. I believe in the power of collaboration and enjoy working in dynamic,
                fast-paced teams to deliver innovative solutions.
              </p>
              <p className="text-gray-600 text-lg">
                When I'm not coding, I enjoy reading tech blogs, experimenting with new technologies, and
                contributing to open-source projects. I’m always open to new opportunities and challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              {/* Replace this with a photo of yourself */}
              <img src="/images/your-photo.jpg" alt="Your Photo" className="rounded-full w-48 h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  