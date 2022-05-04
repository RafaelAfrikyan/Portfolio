import React, { useRef } from "react";
import reactIcon from "../assets/react-brands.svg";
import cssIcon from "../assets/css3-alt-brands.svg";
import htmlIcon from "../assets/html5-brands.svg";
import jsIcon from "../assets/js-brands.svg";

export default function About({ aboutRef }) {
  return (
    <div className="Aboutcontact">
      <div ref={aboutRef} className="AboutrightSide">
        <div className="wrapPhoto">
          <img
            src="https://pbs.twimg.com/profile_images/950624816561827841/RI36b75x_400x400.jpg"
            alt=""
          />
          <div className="wrapText">
            <h2> Rafael Afrikyan</h2>
            <p> Frontend developer</p>
          </div>
        </div>
        <div className="aboutSkills">
          <h1>Skills</h1>
          <img className="skillimg" src={htmlIcon} alt="" />

          <img className="skillimg" src={cssIcon} alt="" />
          <img className="skillimg" src={jsIcon} alt="" />
          <img className="skillimg" src={reactIcon} alt="" />
        </div>
      </div>

      <div className="AboutLeftside">
        <div>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptas sunt repellat eos odio culpa in, quam nemo velit impedit
            sequi nobis numquam suscipit. Quasi dolores tenetur labore cum
            incidunt animi? Quia nisi quod illo? Possimus facilis sequi optio
            corrupti omnis voluptas necessitatibus architecto obcaecati, nam
            commodi id officia debitis, ullam eius! Aliquid veritatis, suscipit
            veniam amet esse voluptatibus temporibus quo ea? Dignissimos velit
            laudantium id minus rem. Fugiat possimus aperiam fugit. Harum aut,
            inventore aliquid, pariatur optio rerum cupiditate deserunt mollitia
            ex reprehenderit tenetur, quibusdam atque aliquam. Placeat aperiam
            provident officia quaerat facere obcaecati assumenda perspiciatis?
            Sed, consequatur in. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Labore perferendis impedit eum dolorem animi
            commodi laborum recusandae quaerat neque repudiandae? Amet ipsa
            fugiat est quis nobis perferendis unde corrupti reiciendis quidem
            dolor. Voluptatem eius amet error cumque. Corporis deleniti sunt nam
            ea, voluptas fuga neque officiis quis earum libero officia, dolor
            harum atque! Labore, doloremque quos sunt expedita eaque aut illum
            explicabo officia mollitia consequuntur molestias voluptates, iure
            neque veniam itaque! Vero, provident cumque odio amet illum, error
            porro officiis suscipit, sit dolore illo vel adipisci maiores
            temporibus consectetur culpa id eaque! Ut officiis nostrum amet
            aliquid dolorum accusantium optio? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ducimus atque incidunt cupiditate id
            expedita sint sunt vero numquam corporis laboriosam, fugiat a nemo
            est culpa, accusantium temporibus. Error iusto sequi ab voluptatum
            assumenda laborum consequuntur aperiam dignissimos soluta officia
            quidem, a harum suscipit velit modi. Omnis, accusamus! Accusantium,
            illo commodi.x``
          </p>
        </div>
      </div>
    </div>
  );
}
