import Image, { type StaticImageData } from "next/image";

interface ExperienceEntryProps {
  position: string;
  company: string;
  dateFrom: Date;
  dateTo: Date | string;
  shortDescription?: string;
}

export default function ExperienceEntry({ props }) {}
