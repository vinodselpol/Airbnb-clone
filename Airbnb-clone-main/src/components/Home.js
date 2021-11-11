import React from "react";
import "../style/css/Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Experience from "./Experience";

function Home() {
  return (
    <div className="home">
      <Banner />
      <h2> Live anywhere</h2>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=1200"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=1200"
          title="Unique Stays"
          description="Spaces that are more than just space to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=1200"
          title="Cabbins & Cottages"
          description="Cute and pretty places for small groups"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=1200"
          title="Pets Welcome"
          description="stays which allow your pets"
        />
      </div>
      <div className="home__experienceSection">
        <Experience />
      </div>
      <h2>Join millions of hosts on Airbnb </h2>
      <div className="home__hosts">
        <Card
          src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=1200"
          title="Host your home"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=1200"
          title="Host an online Experience"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=1200"
          title="Host and Experience"
        />
      </div>
    </div>
  );
}

export default Home;
