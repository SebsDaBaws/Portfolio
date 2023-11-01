import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Articlepage from "~/components/starter/articlepage/articlepage";


export default component$(() => {
  return (
    <>
      <Articlepage
        id="15275559"
        headline="Forstandere taler om, at der er noget, forældrene har glemt"
        headline2="Er det en ny slags curlingforældre, der ringer til landets efterskoler?"
        teaser="Frafaldet er steget på landets efterskole, og forstandere fortæller, at en del af frafaldet skyldes, at forældre blander sig mere end for få år siden. Forsker ser dog en god forklaring på udviklingen."
        imageUrl="https://billeder.jyllands-posten.dk/pictures/image/15313307/kfxrrl/ALTERNATES/h-free/efterskoler-kaemper-med-pyldrede-foraeldre"
        caption="GI Akademiet i Hornsyld er en af de efterskoler, hvor man oplever, at både elever og forældre har forandret sig de seneste år.  Foto: Casper Dalhoff"
        bodyText={
          '<p>Lets goo</p>\n'
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
  title: "Jyllands-Posten - Nyheder til dig, der vil vide mere",
  meta: [
    {
      name: "description",
      content: "Jyllands-Posten",
    },
  ],
};
