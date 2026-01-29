import Image, { type StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  summary: string;
  image?: StaticImageData;
  stack?: string[];
  links?: { label: string; href: string }[];
}

export default function ProjectCard({ title, summary, image, stack, links }: ProjectCardProps) {
  return (
    <div className="relative flex min-h-60 flex-col overflow-hidden rounded-3xl p-6 sm:p-8 lg:min-h-75">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-b from-black via-black/82 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col gap-4 text-white">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>

          {links?.length ? (
            <div className="flex flex-wrap justify-end gap-2">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 transition hover:bg-white"
                >
                  {label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-white/90">{summary}</p>

        {/* Push stack pills to bottom if you want */}
        <div className="mt-auto">
          <ul className="flex flex-wrap gap-2">
            {stack?.map((tech, i) => (
              <li
                key={`${tech}-${i}`}
                className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
