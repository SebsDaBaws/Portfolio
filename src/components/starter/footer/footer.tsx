import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { SebLogo } from "../icons/jp_logo";
import {SebLogoWhite} from "../icons/jp_logo";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="mt-6 w-full block bg-customBlue text-white">
      <div class="container mx-auto flex flex-col items-center py-6">
        <a
          class="px-4 pl-14 pt-2 pb-6 inline-block justify-center place-content-center sm:pl-20 md:pl-24 "
          href="/"
          title="logo"
          style="#FFFFFF"
        >
          <SebLogoWhite class="h-60 md:h-24 lg:h-24"/>
        </a>
        <p class="font-serif text-sm md:text-base uppercase mb-3">Kontakt</p>
        
        <p class="font-serif text-sm md:text-base mb-2"> <a href="tel:+4522295600">Tlf: 22 29 56 00</a> </p>
        <p class="font-serif text-sm md:text-base mb-2"> <a href="mailto:sebastianhadi62@gmail.com">Mail: sebastianhadi62@gmail.com</a> </p>
        <p class="font-serif text-sm md:text-base mb-2"> <a href="https://www.linkedin.com/in/sebastian-bagger-hadi/details/skills/">LinkedIn</a> </p>


        <div class="w-full pt-4">
              <hr class="h-0.5 mt-4 mb-4 bg-black border-2 mx-2 md:mx-0" />
            </div>
        <p class="font-serif text-sm md:text-base">© Sebastian Bagger Hadi 2023</p>
        
      </div>
    </footer>
  );
});
