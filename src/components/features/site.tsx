import Image from "next/image";

export type SiteProps = {
  link: string;
  logo: string;
  title: string;
};

export function SiteComponent({ link, logo, title }: SiteProps) {
  return (
    <div className="pt-8 pb-4 px-4 border-2 bg-foreground text-background text-l border-background hover:border-foreground rounded-xl w-44 h-36">
      <a
        className="grid grid-rows-2 justify-items-center gap-2 h-full"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="h-full"
          aria-hidden
          src={logo}
          alt={logo}
          width={100}
          height={64}
        />
        <div className="self-center overflow-hidden text-ellipsis w-full">
          {title}
        </div>
      </a>
    </div>
  );
}
