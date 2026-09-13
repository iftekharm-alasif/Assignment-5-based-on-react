import { use } from "react";
import type { Technology } from "../type/technologies";

const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json"
).then((res) => res.json());

export default function Technologies() {
  const technologies = use(technologiesPromise);

 return (
  <section className="mx-auto max-w-[1080px] px-5 py-16">
    
    <h2 className="text-3xl font-bold text-[#172033]">
      Explore the <span className="text-[#d83b9d]">Technologies</span>
    </h2>

    <p className="mt-2 text-sm text-gray-500">
      Pick one technology per category to build your ideal stack.
    </p>

  </section>
);
}