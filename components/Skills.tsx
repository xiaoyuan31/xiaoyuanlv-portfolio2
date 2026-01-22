// components/Skills.tsx
export default function Skills() {
  const skills = [
    { name: "SwiftUI / iOS", level: 70 },
    { name: "React / Next.js", level: 70 },
    { name: "Flutter", level: 70 },
    { name: "Kotlin / Android", level: 80 },
    { name: "PHP / MySQL", level: 70 },
  ];

  return (
    <section id="skills" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-amber-50">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-indigo-400 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
