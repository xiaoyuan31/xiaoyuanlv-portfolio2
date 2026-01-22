// components/AboutMe.tsx
export default function AboutMe() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image / Illustration */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/programmer.png" // Place your image in public/images/
            alt="Xiao Yuan"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-300 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3 text-gray-300 space-y-4">
          <p>
            Hello! I’m <span className="font-semibold text-indigo-500">Seint Seint Thu @ Xiao Yuan Lv</span>, a passionate app developer and technology enthusiast. 
            I specialize in building mobile and web applications using modern technologies like React, Next.js, Kotlin, and PHP.
          </p>
          <p>
            I love creating smooth, user-friendly experiences and constantly learning new tools and frameworks to improve my craft.
            When I’m not coding, you can find me hiking, reading, or exploring new music.
          </p>
          <p>
            This portfolio showcases some of my favorite projects and demonstrates my skills, creativity, and dedication as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
