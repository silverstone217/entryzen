import { getUser } from "@/actions/authActions";
import React from "react";

async function page() {
  const user = await getUser();

  if (!user) return null;

  return (
    <div
      className="min-h-screen flex flex-col
    justify-start items-start gap-4"
    >
      <h2 className="text-3xl">
        Binevenue, <strong>{user?.name}</strong>
      </h2>

      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas
        quasi in itaque praesentium accusantium, sint consectetur harum qui rem
        numquam a vero placeat officiis doloremque reprehenderit repellat quo
        eligendi. Tenetur, minima optio laudantium at quos voluptas. Facilis
        facere animi neque molestias placeat. Magni illum sint, quidem sunt
        ipsam eveniet asperiores ad voluptatem amet laborum? Debitis delectus
        pariatur dicta vitae. Reiciendis inventore sunt aliquid quod voluptates
        incidunt facere quae, iusto tenetur ex delectus assumenda saepe impedit,
        cum modi ipsam rem. Eius fugit nihil corrupti dicta et debitis
        asperiores quas ut? Dolores voluptatum, quisquam adipisci laboriosam
        architecto eaque iste, optio sapiente porro ab ullam. Adipisci est
        eveniet alias ut, dolor cupiditate minima illo eum molestias asperiores
        vero pariatur ipsum provident inventore! Deserunt, consequuntur velit
        nobis quisquam quibusdam sit ut libero facere veniam quam quae
        blanditiis dolore, aperiam officia. Dignissimos, libero placeat minus at
        deleniti facere, vero cum, deserunt possimus expedita ratione. Dolorem
        odit, placeat reprehenderit optio blanditiis sed perferendis
        voluptatibus dolorum earum, eos fugiat odio? Illum nisi dolores
        pariatur, facere similique, voluptates numquam accusantium inventore
        explicabo assumenda voluptas odit, cum quisquam. Expedita eaque repellat
        sunt blanditiis animi esse quibusdam quaerat, amet natus culpa excepturi
        facilis porro ipsa aspernatur dolorum corrupti officiis ipsam ad quo
        ratione incidunt optio rerum explicabo dicta? Saepe! Omnis, architecto
        illo ad, accusamus perspiciatis natus, beatae obcaecati voluptatibus
        corporis esse laborum sequi quam aliquid doloremque amet quas ut quod.
        Pariatur eveniet earum quod temporibus consequatur necessitatibus
        officia omnis. Saepe consequatur officiis velit ipsum, iure animi quam
        exercitationem adipisci consequuntur labore nulla necessitatibus, porro
        reprehenderit cum placeat deserunt explicabo, fugit eaque iusto commodi!
        Asperiores maxime incidunt eum quaerat consequuntur. Recusandae harum
        impedit sequi distinctio doloribus, voluptatem qui inventore
        voluptatibus deserunt vero repellendus at labore odio commodi in
        nesciunt voluptatum velit tempora? Rem ut doloribus perferendis cumque
        pariatur, maxime quasi? Atque similique ad labore fuga mollitia neque
        iste corrupti odio nesciunt vero! Nostrum unde quis facilis modi eum
        facere, excepturi tempora dolorem perferendis voluptates aut velit
        corrupti vitae. Magnam, consequuntur? Voluptatum eius quas atque facilis
        praesentium cumque nemo vel omnis animi esse? Et nobis error ratione
        nisi fuga molestiae harum ad hic, qui nam eligendi consequuntur
        accusamus possimus ut odit? Corporis atque soluta veritatis obcaecati
        eum perspiciatis aliquid, reprehenderit quam non, vitae ullam velit
        accusantium eaque temporibus, beatae est unde aspernatur optio magni a
        dolor officia omnis! Vero, placeat esse! Inventore dolor odit atque
        neque maxime qui et assumenda corporis. Magni, rem. Provident aut labore
        ratione dolor! Expedita, laudantium, obcaecati, consectetur qui
        accusantium incidunt atque unde odit laboriosam dignissimos deserunt.
        Dolorem adipisci nobis quidem facere obcaecati ad optio cupiditate
        provident laborum molestias, vero velit eius possimus aperiam inventore
        mollitia tempore voluptate amet. Laboriosam, labore. Asperiores, odio
        vitae. Nobis, vel nesciunt. Sapiente maxime quam mollitia, atque quis
        voluptate minus aperiam debitis laboriosam, assumenda eaque. Soluta
        inventore nam ipsam laboriosam, dolorem repellat. Sequi saepe doloribus
        voluptatibus possimus similique nulla reiciendis mollitia iusto?
        Incidunt, distinctio quidem vitae corrupti iusto, nulla eaque labore
        temporibus error corporis debitis consequuntur expedita, neque ex natus
        accusamus? Repellat temporibus beatae eos earum officiis fugiat esse
        dolore debitis nemo! Dolorum unde possimus earum adipisci repudiandae ab
        accusantium distinctio eligendi nobis sunt dolor beatae, ducimus
        obcaecati esse facilis accusamus nisi culpa maxime, cum ea explicabo
        doloremque iusto. Commodi, totam mollitia? Quo quidem quis harum, amet
        facilis rem corporis, laborum consequatur, non accusantium nesciunt et
        ab! Blanditiis, corporis exercitationem? Quod ab esse nihil consequatur
        aspernatur? Deleniti quidem dolore repellat sapiente dolor? Nemo eaque
        ut illum molestias nobis blanditiis, praesentium aspernatur facere sunt
        ex, molestiae corrupti cumque. Voluptas sapiente odio similique nihil,
        maxime odit aliquam repudiandae ea sint non blanditiis, modi sed.
        Blanditiis eveniet distinctio incidunt voluptate. Repudiandae voluptates
        reiciendis dolor, laborum voluptatibus sed possimus vel illum ea earum
        nam repellendus praesentium ullam itaque nobis quae nesciunt mollitia
        similique id accusantium quam! Laborum quis explicabo amet voluptatem
        mollitia nemo atque similique sed ullam harum unde autem architecto
        esse, impedit excepturi a, enim odit reprehenderit. Incidunt molestias
        inventore quos autem ad expedita modi. Repellat, aliquam recusandae
        eaque eos totam vel possimus consequatur! Illum minima doloremque animi
        at, iure quas assumenda tempore qui reprehenderit necessitatibus
        pariatur consectetur tempora maxime? Eligendi facere quasi vero ullam.
        Corrupti nulla repellendus, iure optio aliquam tempore, excepturi,
        voluptatum nihil exercitationem soluta accusantium voluptate eveniet
        maiores animi odit totam atque ratione? Vero iusto ut similique facilis
        maxime nulla harum ipsum. Sapiente quis hic sed quas saepe laborum
        voluptatibus nesciunt, doloribus, id maiores modi facere unde accusamus!
        Maxime architecto quod accusamus illum expedita dolorem animi magnam?
        Illum porro explicabo animi quo! Necessitatibus eius ullam officia
        repudiandae expedita similique, aliquid dolore iure dolores eaque vitae
        omnis nulla animi! Provident nostrum debitis placeat adipisci tenetur
        veniam non, laboriosam quasi minima, amet, assumenda a? Provident cumque
        consequuntur voluptatibus facilis repudiandae nam necessitatibus
        dignissimos eos animi omnis dolore maiores eum fugit, maxime accusantium
        voluptas porro explicabo reprehenderit, placeat nihil voluptates eaque
        ex? Praesentium, dolores dolor! Eaque voluptatibus est earum itaque in,
        culpa similique neque ullam id nemo possimus dolores totam, adipisci
        architecto! Consectetur quidem iste nulla ratione et asperiores
        perspiciatis illum? Pariatur ullam quod error. Animi nostrum dicta
        delectus eligendi hic ab dignissimos exercitationem corrupti suscipit
        magni porro aperiam vitae placeat repellat, id ut alias quasi modi
        nesciunt distinctio. Ipsam pariatur aspernatur amet minima reiciendis?
        Eius animi impedit exercitationem aut nesciunt a id dicta possimus
        molestias necessitatibus facere voluptates, cumque cum incidunt odio
        veniam rem odit saepe eligendi quidem sunt earum. Provident
        necessitatibus omnis sapiente. Excepturi reprehenderit perferendis
        tenetur nulla necessitatibus debitis, voluptate dolorum, magnam, quod
        corporis consequuntur! Asperiores cupiditate laudantium facilis
        provident deserunt totam ipsa, dicta animi nam quod ipsam tempora veniam
        fugit sequi. Pariatur cum odit, aut, iste earum laborum iure assumenda
        eum beatae veniam molestias velit delectus vel iusto ipsam? Consequatur
        ex eos veritatis, minus culpa id rerum. Praesentium quos suscipit esse?
        Iusto ullam illo quaerat error minima adipisci laborum ea? Nostrum,
        omnis possimus. Expedita nihil reprehenderit molestiae officiis eaque
        eveniet iusto recusandae temporibus placeat. Nisi corrupti unde maiores
        earum suscipit ad. Assumenda vitae dolorem est cupiditate, ex sint
        eveniet quasi quam fugiat eaque ullam nemo, odio doloremque nam? Soluta
        officiis doloremque consectetur ipsum vero, alias neque repudiandae
        provident ipsa sunt cupiditate! Aut earum excepturi accusamus qui
        consectetur repellendus? Dolorem, recusandae esse, aut odit repellendus
        accusamus nam ratione incidunt voluptatibus ipsum assumenda nemo
        molestiae animi reiciendis commodi labore blanditiis quae nulla
        adipisci! Consequatur aliquam doloremque nobis cum nam corporis
        laboriosam voluptatem aut maxime non officia quaerat voluptatum
        expedita, quam eum ad quisquam hic omnis perferendis iure adipisci!
        Suscipit perspiciatis nemo vitae modi. Eos quaerat ducimus sequi
        repellendus illo, tenetur in, deserunt iure illum officiis nemo
        voluptatum, consequatur autem fuga rem minima ut numquam vel expedita
        exercitationem explicabo nostrum. Ipsum odit magni error. Beatae omnis
        dolorum, blanditiis magnam eos necessitatibus. Dolores numquam obcaecati
        nemo error, laboriosam adipisci unde quisquam iste, cupiditate impedit
        quaerat voluptatibus expedita pariatur perferendis harum eveniet
        reprehenderit facere velit beatae! Similique ipsa iure error et totam
        dolore, inventore eaque laborum alias quia, exercitationem illo
        repellendus iusto autem ratione debitis sit amet neque tempora impedit?
        Quam architecto saepe nisi deserunt eos. Labore nemo pariatur qui
        laboriosam temporibus quod sequi neque eos praesentium doloribus ex
        ratione tenetur, nihil delectus error reprehenderit repudiandae
        repellendus rem eaque autem cum modi consectetur deleniti? Quis, ullam.
        Pariatur molestias excepturi sed fuga sapiente, esse unde accusamus,
        repudiandae, quas dolorum molestiae similique ipsum. Soluta doloremque
        reiciendis maiores laborum totam aliquid est odio, nostrum nihil
        dolores, iste, quos similique! Doloribus alias eveniet aliquam ipsum
        laboriosam asperiores laudantium vitae veritatis sit, voluptatibus ad!
        Modi quos necessitatibus laudantium repellendus aliquid sequi ratione
        ullam impedit, dolore, iure, enim reiciendis et itaque! Itaque! Error
        tempora quo voluptatum ipsam impedit aut, obcaecati, culpa odit
        repellendus, eligendi voluptates placeat? Ratione asperiores, sunt
        voluptate mollitia magnam commodi perferendis ex, dolorem quaerat amet
        culpa nulla dolorum? Officiis. Nesciunt tenetur tempora a corrupti
        maiores alias est labore voluptatibus doloremque rerum hic deleniti
        recusandae ratione, aspernatur iusto, ab soluta aperiam minima ut
        repudiandae temporibus dolorem! Ex laudantium iste accusantium. Enim,
        nobis! Iure ducimus nemo nam fuga minus magni a blanditiis ratione
        reiciendis tenetur earum doloremque nostrum delectus, animi omnis
        laboriosam quis, rem sed, molestias perspiciatis commodi dolore et.
        Nobis. Temporibus autem enim consectetur, beatae voluptate et obcaecati,
        vel sed pariatur dolorem eos ex corporis fugiat, harum aut saepe eum
        labore nostrum dignissimos cumque tenetur ipsam excepturi aperiam?
        Numquam, temporibus! Repellendus magnam natus dolorem ab recusandae
        obcaecati, explicabo alias amet voluptatum provident sapiente! Magni
        accusantium, ratione voluptas, exercitationem aperiam vero ipsa quos
        illo ipsam consequuntur voluptatum impedit sunt consectetur possimus!
        Consequuntur maiores nam culpa deleniti, totam ipsum ratione nostrum
        eveniet consequatur natus harum illo veritatis possimus ab, ad tempora
        non enim! Sed, delectus alias tempore aspernatur dolores harum incidunt
        doloribus? Aliquid soluta saepe alias quibusdam officiis, hic
        praesentium itaque consequatur esse voluptates dicta? Animi iste magni
        ab, tempore nostrum maxime delectus quaerat mollitia dolorum consectetur
        magnam ipsum, culpa cumque aliquid. Magni voluptatibus expedita debitis
        ad dolorum, omnis ab. Animi perferendis ad alias commodi id, eum quo
        delectus recusandae dicta! Odit, totam iusto. Repudiandae, quibusdam
        repellendus deleniti quae animi maxime quis.
      </p>
    </div>
  );
}

export default page;
