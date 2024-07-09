import React from "react";
import PostBread from "../components/PostBread";
import BlogCard from "../components/BlogCard";
import PostSidebar from "../components/common/PostSidebar";
import { useParams } from "react-router-dom";
import PostInfo from "../components/BlogCard/PostInfo";

function SingleBlog() {
  const { category, postname } = useParams();

  return (
    <>
      <PostBread
        postName={postname}
        postLink="!#"
        cateLink={`/blog/${category}`}
        cateName={category}
      />
      <div className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-white shadow-sm">
              <PostInfo />
              <div className="main-content p-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus qui cumque molestias nemo? Voluptatibus rem
                  voluptas iure, recusandae non sint consequuntur corporis, ut
                  neque sequi ipsam aliquam reiciendis officia, nostrum
                  laboriosam dolor animi aliquid nobis? Totam labore eum et
                  praesentium molestiae possimus. Et vero aspernatur possimus
                  earum! Odio expedita in possimus delectus minus distinctio
                  consequatur deserunt aliquam eligendi repellat, ducimus sit
                  quo inventore, qui saepe reiciendis vero error repellendus
                  earum incidunt veniam beatae eius vitae. Laboriosam ratione,
                  atque molestiae dolores, officiis alias provident
                  reprehenderit debitis unde maxime quas quis. Earum voluptate
                  quibusdam sint nihil quam unde nam. Unde laboriosam sunt,
                  nesciunt culpa exercitationem error a iusto aliquam,
                  voluptatem non esse, sint blanditiis? Eos vero id ex quidem
                  iure nisi quos nobis, veritatis quae non, atque rerum commodi,
                  ea veniam vel sunt suscipit provident dignissimos perferendis
                  quis? Neque molestias ratione error culpa vel eum illum
                  voluptas, temporibus laboriosam nulla libero veritatis beatae,
                  aperiam tenetur repudiandae reiciendis, veniam ipsam impedit
                  ea dolore facere nesciunt minima nemo animi. Placeat, ipsam
                  voluptas fugiat debitis animi odit optio, accusamus at
                  veritatis delectus necessitatibus? Expedita autem obcaecati
                  debitis ab ratione quibusdam deleniti voluptatem voluptate
                  commodi dicta sapiente maxime ducimus nemo, tenetur iure
                  perspiciatis cumque sit doloribus, repellat repellendus
                  voluptatum magnam sunt nihil? Nihil eveniet, fugiat,
                  aspernatur reiciendis illo porro nobis fuga corporis ex et at
                  beatae aut obcaecati esse, sint corrupti deleniti neque
                  distinctio. Est placeat ipsa laborum, sapiente modi quibusdam
                  eveniet dolorem molestias nesciunt sint dolores! Expedita,
                  dolorem quam! Soluta reiciendis placeat fugiat nihil suscipit
                  qui omnis, dicta iure libero delectus! Placeat, fugit
                  provident dolore perspiciatis veniam totam distinctio magni
                  quia in sed. Reprehenderit libero illum laboriosam obcaecati
                  voluptas possimus molestiae tempore explicabo voluptatum
                  mollitia nam tempora, exercitationem vero eaque expedita
                  necessitatibus quisquam ea iure sit ut aperiam quos magni.
                  Sequi mollitia officia quisquam nobis, similique iste non
                  dolorem, fuga ad sunt vitae dignissimos repellendus fugiat
                  magni reprehenderit inventore repudiandae nesciunt, enim quia
                  velit! Molestiae placeat ratione officiis, debitis autem
                  aperiam omnis itaque. Repellat nemo maiores sed, aspernatur
                  ipsam qui eaque a illo libero rem quis sequi ratione culpa
                  labore assumenda itaque unde doloremque. Sunt voluptatem
                  temporibus atque ea quam dignissimos saepe velit tempora,
                  libero error sed illo eaque autem! Ut ex assumenda consequatur
                  quas culpa nesciunt nostrum cum porro quae eum, sequi
                  veritatis architecto facilis non a dolorum rem accusantium
                  vero officiis dolores distinctio, ad fuga nemo repudiandae?
                  Impedit ducimus eligendi saepe possimus blanditiis nemo
                  tempora alias dolorum, doloremque adipisci omnis incidunt,
                  ipsa, earum minus harum culpa iste! Esse asperiores quod
                  inventore odit necessitatibus ea, non placeat quis ad hic quos
                  blanditiis, magni tenetur. Esse aut odio atque libero maxime,
                  dolore officiis sint a ratione harum repellat corrupti
                  provident error? Rerum, dignissimos. Pariatur magnam eos
                  voluptas illum nam voluptatum quos sapiente, numquam quo
                  minima repellendus praesentium provident est commodi,
                  exercitationem voluptatem! Atque dignissimos commodi,
                  recusandae porro ipsa nihil cum quisquam ullam nulla harum
                  explicabo reiciendis nostrum consequuntur, dolores laborum ab
                  in enim iste distinctio quam labore natus, error minus animi.
                  Soluta odit natus pariatur.
                </p>
              </div>
            </div>
            <div className="ml-8 col-span-12 lg:col-span-4">
              <PostSidebar
                cateLink={category}
                singlePostLink="Empowering future with solar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
