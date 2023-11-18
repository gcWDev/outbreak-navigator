import React from "react";
import mockups from "../../../assets/mockups.svg";

export default function About() {
  return (
    <section className="container my-5">
      <div className="row justify-content-between">
        <div className="col-6">
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            ipsam.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            autem dolores doloribus eaque magni architecto quibusdam cumque est
            aliquid reprehenderit, dolor debitis. Doloribus praesentium veniam
            corporis recusandae nihil, possimus deleniti molestias quos, sequi
            ut dolorem saepe quia quae harum incidunt magni temporibus
            voluptatum eaque beatae dolores adipisci inventore consequatur eos!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo harum
            quisquam distinctio ipsam dolore cumque accusamus aliquid debitis
            magnam autem sapiente voluptate id officiis, neque dolorum
            consequatur sit! Saepe omnis vel voluptates temporibus placeat
            impedit, accusamus explicabo unde cupiditate officia fugit ut,
            repellat numquam molestiae reprehenderit necessitatibus. Sed,
            laboriosam praesentium!
          </p>
        </div>
        <div className="mx-1 col-5">
          <img src={mockups} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
