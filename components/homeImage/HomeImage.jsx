import Image from "next/image";
import { useEffect, useState } from "react";
import homeImage_laptop from "../../public/Hero_Image.jpg";
import homeImage_mobile_tablet from "../../public/Hero_Image (Tablet and Mobile).jpg";

export default function HomeImage() {
  const [tablet_and_mobile, set_tablet_and_mobile] = useState(null);
  useEffect(() => {
    function screen(e) {
      const screenWidth = window.innerWidth;
      if (+screenWidth >= 1024) {
        set_tablet_and_mobile(false);
      } else {
        set_tablet_and_mobile(true);
      }
    }
    screen();
    window.onresize = screen;
    return () => {
      window.removeEventListener("resize", screen);
    };
  }, [tablet_and_mobile]);

  return (
    <>
      <section
        id="home-image"
        className="h-96 lg:col-start-2 lg:row-start-1 lg:row-end-4 relative lg:h-full"
      >
        <Image
          priority
          src={tablet_and_mobile ? homeImage_mobile_tablet : homeImage_laptop}
          layout="fill"
          objectFit="cover"
          alt="hero image"
          sizes="(min-width: 1024px) 50vw,100vw"
          placeholder="blur"
        />
      </section>
    </>
  );
}
