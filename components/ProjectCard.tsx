import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  tech: string[];
//   image: string;
  url: string; // link for project
};

export default function ProjectCard({ title, description, tech, url }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300"
    >
      

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
    </Link>
  );
}
