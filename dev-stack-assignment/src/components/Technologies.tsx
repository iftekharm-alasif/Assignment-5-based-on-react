import { use } from "react";
import type { Technology } from "../type/technologies";

const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json",
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

      {/* Technology Card */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10"
                />

                <div>
                  <h3 className="text-sm font-bold text-[#172033]">
                    {technology.name}
                  </h3>

                  <span className="text-[10px] text-gray-400">
                    {technology.category}
                  </span>
                </div>
              </div>

              <span className="rounded-full bg-orange-50 px-2 py-1 text-[9px] font-medium text-orange-500">
                {technology.badge}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs leading-5 text-gray-500">
              {technology.description}
            </p>

            {/* Difficulty + Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[9px] text-gray-500">
                {technology.difficulty}
              </span>

              <span className="text-xs text-yellow-500">
                ★ {technology.rating}
              </span>
            </div>

            {/* Button */}
            <button className="mt-4 w-full rounded-md bg-[#080d1c] py-2 text-[11px] font-medium text-white">
              Add to Stack
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
