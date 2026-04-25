import Image from "next/image";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <Image
        src="/tks-logo.png"
        alt="TechKey Solutions"
        width={300}
        height={156}
        priority
        className="h-12 w-auto"
      />
    </span>
  );
}
