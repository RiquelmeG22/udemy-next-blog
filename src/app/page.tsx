import { Suspense } from "react";
import { Header } from "../components/Header";
import { SpinLoader } from "../components/SpinLoader";
import { PostList } from "../components/PostLits";
import { Container } from "../components/Container";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "../PostHeanding";

export default async function Home() {

  return (
    < Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">

        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image className="group-hover:scale-105 transition" src="/img/image.png" alt="Next.js" width={800} height={600} priority />
        </Link>

        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 mb-4 font-extrabold"
            dateTime="2026-03-02">02/03/2026 10:20</time>

          <PostHeading as="h1" url="#">Lorem ipsum dolor sit amet consectetur adipisicing!</PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis incidunt libero reiciendis qui possimus blanditiis praesentium accusantium, consequatur dicta sapiente exercitationem. Magnam animi sit necessitatibus ex voluptate quisquam reprehenderit!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer className="text-4xl font-bold text-center py-8">Aqui é o fotter</footer>
    </Container>
  );
}
