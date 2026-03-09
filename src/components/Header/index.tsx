import Link from "next/link";

export function Header({ classProps }:  { classProps?: string }) {

  return (
    <header className="text-4xl/normal font-extrabold py-8 ">
        <Link href="#">The Blog</Link>
    </header>
  )
}
