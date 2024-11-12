import Image from "next/image";
import { HoverEffect } from "../CardHoverEffect";

export function CardHoverComponents() {
  return (
    <div className="max-w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    content: (
      <div>
        <Image
          src={"/images/html-logo.png"}
          alt="html"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/css-logo.png"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/js-logo.jpeg"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/ts-logo.jpeg"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/react-logo.png"}
          alt="html"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/nextjs-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/redux-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/tailwind-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/node-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/express-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/sequelize-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/ruby-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/postgresql-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/mongodb-logo.jpg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/firebase-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/aws-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  // {
  //   title: "Netflix",
  //   description:
  //     "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  //   link: "https://netflix.com",
  // },
  // {
  //   title: "Google",
  //   description:
  //     "A multinational technology company that specializes in Internet-related services and products.",
  //   link: "https://google.com",
  // },
  // {
  //   title: "Meta",
  //   description:
  //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  //   link: "https://meta.com",
  // },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
