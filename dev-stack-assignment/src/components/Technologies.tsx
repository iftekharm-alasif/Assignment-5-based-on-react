import { use, useState } from "react";
import type { Technology } from "../type/technologies";
import { toast } from "react-toastify";

const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json",
).then((res) => res.json());

export default function Technologies() {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  // Add Technology
 const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(
      <div className="flex items-center gap-2">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-6 w-6"
        />

        <span>
          {technology.name} is already in your stack!
        </span>
      </div>
    );

    return;
  }

  setStack([...stack, technology]);

  toast.success(
    <div className="flex items-center gap-2">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-6 w-6"
      />

      <span>
        {technology.name} added to your stack!
      </span>
    </div>
  );
};
  // Remove One Technology
 const handleRemove = (id: string) => {
  const technology = stack.find(
    (item) => item.id === id
  );

  const newStack = stack.filter(
    (item) => item.id !== id
  );

  setStack(newStack);

  if (technology) {
    toast.info(
      <div className="flex items-center gap-2">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-6 w-6"
        />

        <span>
          {technology.name} removed from your stack!
        </span>
      </div>
    );
  }
};

  // Remove All Technologies
const handleRemoveAll = () => {
  if (stack.length === 0) {
    return;
  }

  const removedCount = stack.length;

  setStack([]);

  toast.info(
    <div className="flex items-center gap-2">
      <span className="text-lg">🗑️</span>

      <span>
        {removedCount} technologies removed from your stack!
      </span>
    </div>
  );
};
  return (
    <section className="mx-auto max-w-[1080px] px-5 py-16">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-[#172033]">
        Explore the <span className="text-[#d83b9d]">Technologies</span>
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Main Layout */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {technologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id);

            return (
              <div
                key={technology.id}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                {/* Top Part */}
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

                  {/* Badge */}
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

                {/* Add Button */}
                <button
                  onClick={() => handleAddToStack(technology)}
                  disabled={isAdded}
                  className={`mt-4 w-full rounded-md py-2 text-[11px] font-medium text-white ${
                    isAdded
                      ? "cursor-not-allowed bg-gray-400"
                      : "cursor-pointer bg-[#080d1c]"
                  }`}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Your Stack Sidebar */}
        <div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Stack Heading */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#172033]">
                  Your Stack
                </h3>

                {stack.length > 0 && (
                  <span className="rounded-full bg-pink-50 px-2 py-1 text-[10px] font-medium text-[#d83b9d]">
                    {stack.length}
                  </span>
                )}
              </div>

              <p className="mt-1 text-[11px] text-gray-400">
                {stack.length === 0
                  ? "No technologies selected yet."
                  : "Your selected technologies."}
              </p>
            </div>

            {/* Stack Content */}
            <div className="mt-5">
              {stack.length === 0 ? (
                /* Empty State */
                <div className="flex h-[66px] items-center justify-center rounded-xl border border-dashed border-gray-200">
                  <p className="text-[11px] text-gray-400">
                    Your stack is empty.
                  </p>
                </div>
              ) : (
                /* Selected Technologies */
                <div className="space-y-3">
                  {stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                    >
                      {/* Technology Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-7 w-7"
                        />

                        <div>
                          <h4 className="text-xs font-semibold text-[#172033]">
                            {technology.name}
                          </h4>

                          <p className="text-[9px] text-gray-400">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(technology.id)}
                        className="flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-medium text-red-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <span>🗑</span>
                        Remove
                      </button>
                    </div>
                  ))}

                  {/* Remove All Button */}
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={handleRemoveAll}
                      className="rounded-md border border-red-100 bg-red-50 px-4 py-2 text-[10px] font-semibold text-red-500 transition hover:bg-red-100"
                    >
                      Remove All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
