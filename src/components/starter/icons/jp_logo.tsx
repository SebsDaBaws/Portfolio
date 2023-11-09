import { component$ } from '@builder.io/qwik';

export type SebLogoProps = {
  readonly class?: string;
};

export const SebLogo = component$( (props: SebLogoProps) => (
  
    //import imageUrl from "src/Pictures/log2023.png"
    <img
      src="src/Pictures/logo2023.png"
      alt="logo"
      class="h-5 md:h-10 lg:h-12"
    />
  
  


));

export const SebLogoWhite = component$( (props: SebLogoProps) => (
  
  //import imageUrl from "src/Pictures/log2023.png"
  <img
    src="src/Pictures/logo2023white.png"
    alt="logo"
    class="h-5 md:h-10 lg:h-12"
  />




));
