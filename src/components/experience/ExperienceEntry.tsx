"use client";
import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";

interface ExperienceEntryProps {
  position: string;
  company: string;
  dateFrom: Date;
  dateTo: Date | "Present";
  bulletPoints?: string[];
  logo?: StaticImageData | string;
}

const formatMonthYear = (d: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(d);

export default function ExperienceEntry({
  position,
  company,
  dateFrom,
  dateTo,
  bulletPoints = [],
  logo,
}: ExperienceEntryProps) {
  const [open, setOpen] = useState(false);

  const dateLabel = useMemo(() => {
    const from = formatMonthYear(dateFrom);
    const to = typeof dateTo === "string" ? dateTo : formatMonthYear(dateTo);
    return `${from} - ${to}`;
  }, [dateFrom, dateTo]);

  const hasDetails = bulletPoints.length > 0;

  return (
    <div className="mt-3 mb-3 w-full rounded-xl bg-gray-900 p-3">
      {/* Header grid */}
      <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 gap-x-3 gap-y-1">
        {/* Logo (spans both rows) */}
        {logo ? (
          <div className="row-span-2 flex h-12 w-12 items-start">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          </div>
        ) : (
          // If no logo, keep layout aligned by rendering an empty spacer
          <div className="row-span-2 h-12 w-0" />
        )}

        {/* Top-left: Position */}
        <h3 className="col-start-2 row-start-1 text-xl leading-tight font-semibold text-gray-100">
          {position}
        </h3>

        {/* Top-right: Dates */}
        <div className="col-start-3 row-start-1 text-sm text-gray-300">{dateLabel}</div>

        {/* Bottom-left: Company */}
        <div className="col-start-2 row-start-2 text-gray-300">
          <span className="text-gray-400">@ </span>
          {company}
        </div>

        {/* Bottom-right: Chevron button */}
        <div className="col-start-3 row-start-2 flex justify-end">
          {hasDetails ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="experience-details"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:ring-2 focus:ring-gray-600 focus:outline-none"
              title={open ? "Collapse" : "Expand"}
            >
              {/* simple chevron */}
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      {/* Expandable details */}
      {hasDetails ? (
        <div
          id="experience-details"
          className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 border-t border-gray-800 pt-3">
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-200">
              {bulletPoints.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
