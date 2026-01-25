import Link from "next/link";

export default function Links( { href, name }: { href: string; name: string } ) {
  return (
    <Link href={href} className=" hover:text-white/50 transition transform duration-300">{name}</Link>
  );
}