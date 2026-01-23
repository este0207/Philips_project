import Link from "next/link";

export default function Links( { href, name }: { href: string; name: string } ) {
  return (
    <Link href={href} className="hover:scale-105">{name}</Link>
  );
}