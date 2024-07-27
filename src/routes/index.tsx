import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Articlepage from "~/components/starter/articlepage/articlepage";
import { InfoButton } from "~/components/starter/icons/info_button";


const tags = [
  { label: "Forældreskab", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:foraeldreskab" },
  { label: "Familieliv", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:familieliv" },
  { label: "Efterskole", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:efterskole" },
  {
    label: "Børneopdragelse",
    id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:boerneopdragelse",
  },
];


export default component$(() => {
  return (
    <>
      <Articlepage
        id="15275559"
        headline=""
        headline2="Sebastian Bagger Hadi"
        teaser="Webudvikler med stor interesse for frontend-udvikling og UX/UI"
        imageUrl="src/Pictures/SBH.jpg"
        caption="Om mig"
        bodyText={
          '<p>26 årig webudvikler, med pulsen på de nyeste teknologier og trends indenfor faget, herunder ChatGPT, GitHub CoPilot og generelt AI. Generelt set har jeg en stor interesse for frontend-udvikling, brugeroplevelse, UI og generelt teknologi. Som person er jeg glad, smilende, og altid åben overfor nye opgaver og idéer. </p>\n'
        }
        authors={[
          {
            name: "Morten Vestergaard",
            imageUrl:
              "https://billeder.jyllands-posten.dk/pictures/image/11634564/qtzemt/ALTERNATES/master-free/morten-vestergaard-jpg",
          },
        ]}
        tags={[
          { label: "GitHub", id: "GitHub" },
          { label: "LinkedIn", id: "LinkedIn" },
          { label: "test1", id: "test1" },
          {
            label: "test2",
            id: "test2",
          },
        ]}
      />

      <div class="section bright">
        <div class="container center">{/*<Starter />*/}</div>
      </div>

      <div class="section">
        <div class="container center">
          <h3></h3>
        </div>
      </div>

      <div class="section"></div>

      <div>
    

      <main class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400 container mx-auto">
        <div class="md:col-span-3">
          {/* Desktop */}
          <div class="font-serif text-2xl font-black break-normal max-w-2xl px-4 md:px-6 justify-start hidden md:block">
           
          </div>
          {/* Mobile */}
          <div class="font-serif text-2xl font-bold break-normal max-w-2xl text-center px-4 md:px-6 justify-start block md:hidden">
            
          </div>
          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-3 md:pb-0">
            Projekter
          </div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>
          

          <li class="py-4 mx-4">
            {/* Article "id": 15275559 */}
            <a class="flex" href="/">
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>2023 |</time>
                  <nobr class="text-customBlue font-semibold uppercase">
                    {" "}
                    React{" "}
                  </nobr>
                </div>

                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Eksempel 1{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                width="320"
                height="213"
                src="https://billeder.jyllands-posten.dk/pictures/image/15313307/kfxrrl/ALTERNATES/e-free/efterskoler-kaemper-med-pyldrede-foraeldre"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="pt-6 pb-4 mx-4">
            {/* Article "id": 15279010 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/international/europa/ECE15279010/granater-fra-sovjettiden-regner-ned-over-bakhmut/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>2023 |</time>
                  <nobr class="text-customBlue font-semibold uppercase">
                    {" "}
                    Qwik - TypeScript{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Eksempel 2{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15044995/t3o5s8/ALTERNATES/e-free/artilleri-donbas"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15273987 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/sport/fodbold/ECE15273987/lige-netop-dette-nederlag-gjorde-ekstra-ondt-for-kent-nielsen-og-co/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>2023 |</time>
                  <nobr class="text-customBlue font-semibold uppercase">
                    {" "}
                    Remix{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Eksempel 3{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15316063/js6a7z/ALTERNATES/e-free/superliga-broendby---silkeborg"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15316002 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/politik/ECE15316002/eksperter-jon-stephensens-paastaaede-forseelse-er-ikke-grov-nok-til-en-politianmeldelse/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>2023 |</time>
                  <nobr class="text-customBlue font-semibold uppercase">
                    {" "}
                    Unity - C#{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Eksempel 4{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15316021/mxx5t8/ALTERNATES/e-free/moderaternes-kulturordfoerer-jon-stephensen-moeder-pressen"
              />
            </a>
          </li>

          <div class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400 mx-2"></div>
          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <div class="lg:px-10 items-center py-4 text-center md:text-right">
            <button
              class="bg-transparent hover:bg-customBlue text-customBlue hover:text-white md:py-1.5 md:px-10 py-2.5 px-24 border 
            border-customBlue hover:border-transparent rounded uppercase text-xs font-semibold"
            >
              <a href="">Se alle projekter</a>
            </button>
          </div>
        </ul>
      </main>

      <div class="w-full hidden md:block">
        <hr class="h-0.5 my-8 bg-black border-2 mx-2" />
      </div>

      


      <div class="w-full hidden md:block">
        <hr class="h-0.5 my-8 bg-black border-2 mx-2 sm:mx-0" />
      </div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sebastian Bagger Hadi - Portfolio",
  meta: [
    {
      name: "description",
      content: "Sebastian Bagger Hadi - Portfolio",
    },
  ],
};
