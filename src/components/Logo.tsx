import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Orriva's brand mark, read from /public/images/logo.jpg. Drop your
 * real logo file in at that path (transparent PNG recommended if you
 * have one — swap the extension below) to replace the placeholder
 * monogram generated for this build.
 */
export default function Logo({ className, priority = false }: LogoProps) {
  return (
    
      <Image
        src="/images/Logo.jpg"
        height={60}
        width={100}
        alt="Orriva by Lotus"
        sizes="80px"
        priority={priority}
        className={className}
      />

  );
}
