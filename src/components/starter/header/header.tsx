import { component$ } from "@builder.io/qwik";
import { SebLogo } from "../icons/jp_logo";

export default component$(() => {
  return (
    <header class="sticky top-0 z-10 bg-white md:static">
      <div class="mx-auto flex max-w-screen-xl items-center md:py-8 md:px-5 px-2 md:pt-16 pt-4">
        
        <div class="basis-64 hidden md:block text-xs font-semibold tracking-wide">
          
        </div>

        <div class="flex grow md:justify-center items-start">
          <a href="/">
            <SebLogo class="h-5 md:h-10 lg:h-12"/>
          </a>
        </div>

        <ul class="flex flex-row text-right md:space-x-2 space-x-2 md:py-5 md:px-5 font-sans-serif font-medium text-xs">
          <li class="border-neutral-400 hidden md:block">
          <button
              class="bg-transparent hover:bg-customBlue text-black hover:text-white py-1 px-2 border 
            border-black hover:border-transparent rounded uppercase tracking-widest"
            >
              <a href="/">Om mig</a>
            </button>
          </li>

          <li>
            <button
              class="bg-transparent hover:bg-customBlue text-blue-700 hover:text-white py-1 px-2 border 
            border-blue-700 hover:border-transparent rounded uppercase tracking-widest"
            >
              <a href="https://abonnement.jyllands-posten.dk/">Portfolio</a>
            </button>
          </li>
          <li>
            <button
              class="bg-transparent hover:bg-customBlue text-black hover:text-white py-1 px-2 border 
            border-black hover:border-transparent rounded uppercase tracking-widest"
            >
              <a href="/">Kontakt</a>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <hr class="h-1.5 my-4 bg-customBlue border-0" />
      </div>
    </header>
  );
});
