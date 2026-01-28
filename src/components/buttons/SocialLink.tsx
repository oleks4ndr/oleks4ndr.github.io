import Image, { type StaticImageData } from "next/image";

interface SocialLinkProps {
  href: string;
  className?: string;
  icon?: StaticImageData;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export default function SocialLink({ href, className, icon, label, size }: SocialLinkProps) {
  const SIZE_PX = {
    sm: 32,
    md: 48,
    lg: 64,
  } as const;
  const sizePx = SIZE_PX[size ?? "md"];

  return (
    <a className={className} href={href} target="_blank">
      {icon && <Image src={icon} alt={label ?? ""} height={sizePx} />}
    </a>
  );
}
