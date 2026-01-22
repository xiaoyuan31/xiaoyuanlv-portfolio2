type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm px-3 py-1 bg-zinc-900 rounded-full text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
