import { AboutMe } from "@/components/info/AboutMe";
import { MyImage } from "@/components/info/MyImage";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12">
      <AboutMe />
      <MyImage />
    </section>
  );
}
