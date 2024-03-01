import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Articlepage from "~/components/starter/articlepage/articlepage";


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
