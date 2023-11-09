import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Articlepage from "~/components/starter/articlepage/articlepage";


export default component$(() => {
  return (
    <>
      <Articlepage
        id="15275559"
        headline="Forstandere taler om, at der er noget, forældrene har glemt"
        headline2="Velkommen til min portfolio"
        teaser="this is good"
        imageUrl="src/Pictures/SBH.jpg"
        caption="test"
        bodyText={
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n'
        }
        authors={[
          {
            name: "Morten Vestergaard",
            imageUrl:
              "https://billeder.jyllands-posten.dk/pictures/image/11634564/qtzemt/ALTERNATES/master-free/morten-vestergaard-jpg",
          },
        ]}
        tags={[
          { label: "Forældreskab", id: "emneord.jp.dk,2017:foraeldreskab" },
          { label: "Familieliv", id: "emneord.jp.dk,2017:familieliv" },
          { label: "Efterskole", id: "emneord.jp.dk,2017:efterskole" },
          {
            label: "Børneopdragelse",
            id: "emneord.jp.dk,2017:boerneopdragelse",
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
