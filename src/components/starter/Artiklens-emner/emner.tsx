import { component$ } from "@builder.io/qwik";
import { InfoButton } from "../icons/info_button";

const tags = [
  { label: "GitHub", id: "https://github.com/SebsDaBaws" },
  { label: "LinkedIn", id: "https://www.linkedin.com/in/sebastian-bagger-hadi/" },
  { label: "test1", id: "" },
  {
    label: "test2",
    id: "",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
        <div class="md:col-span-3">
          <div class="text-lg md:text-lg font-bold break-normal max-w-2xl px-4 md:px-6 justify-start uppercase text-customBlue">
            <p class="flex flex-wrap gap-x-2 items-center sm:pb-2">
              Følg mig på:
             {/*<Starter 
              <a href="/">
                <InfoButton />
              </a>
              />*/}
            </p>
          </div>

          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-0.5 md:pb-6"></div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9 box-border">
          <ul class="flex flex-wrap flex-col sm:flex-row justify-center md:justify-start mx-2 md:mx-8">
            {tags.map((tag) => (
              <li
                class="py-2 flex flex-row items-center justify-center flex-wrap"
                key={tag.id}
              >
                <div class="w-full block sm:hidden py-1 pb-5">
                  <hr class="h-0.5 bg-gray-400" />
                </div>
                <a
                  class="bg-transparent underline text-black sm:py-2 px-4 rounded uppercase tracking-widest text-sm grow hover:font-semibold"
                  href={tag.id}
                >
                  {tag.label}
                </a>

                <button
                  class="bg-white flex md:flex-row hover:bg-customBlue text-black hover:text-white 
                text-xs py-2 md:py-1 px-3 border border-customBlue hover:border-transparent rounded uppercase tracking-widest no-underline"
                >
                  Følg
                </button>
              </li>
            ))}
          </ul>
          <div class="w-full block sm:hidden">
            <hr class="h-0.5 my-4 bg-gray-400 mx-2" />
          </div>
          <div class="lg:px-10 py-4 text-center md:text-right">
            <a
              class="bg-transparent hover:bg-customBlue text-black hover:text-white md:py-1.5 md:px-10 py-2.5 px-16 border 
            border-customBlue hover:border-transparent rounded uppercase text-xs font-semibold"
              href="/pages/tag_page"
            >
              Se mere
            </a>
          </div>
        </ul>
      </section>

      <div class="w-full hidden sm:block">
        <hr class="h-0.5 my-4 bg-black border-0" />
      </div>
    </main>
  );
});
