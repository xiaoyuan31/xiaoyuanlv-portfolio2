import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-3xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="LunaStay"
          description="Real-time hotel booking app with clean architecture."
          tech={["Kotlin", "Android", "PHP", "MySQL"]}
        />

        <ProjectCard
          title="Pokédex App"
          description="Pokémon explorer using Paging 3 and modern Android stack."
          tech={["Kotlin", "Room", "Paging 3"]}
        />

        <ProjectCard
          title="Mood Journal"
          description="Minimal journaling app focused on reflection and habits."
          tech={["Next.js", "Tailwind", "TypeScript"]}
        />
      </div>
    </section>
  );
}
