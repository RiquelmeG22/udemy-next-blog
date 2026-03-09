import Link from "next/link";


type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag = 'h2'}: PostHeadingProps) {

  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold',
    h2: 'text-2xl/tight font-extrabold',
  }

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
