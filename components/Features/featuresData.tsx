import { Feature } from "@/types/feature";
import { BsPersonVcardFill, BsGlobe2 } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { GrAppsRounded } from 'react-icons/gr';
import { SiAdobephotoshop } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';


const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      //   />
      //   <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      // </svg>
      <BsPersonVcardFill className="fill-current" size={40} />
    ),
    title: "Modern Bussiness Cards Designs",
    paragraph:
      "A Modern business card typically includes the giver's name, company or business affiliation (usually with a logo) and contact information such as street addresses, telephone number(s), fax number, e-mail addresses and website. Before the advent of electronic communication business cards might also include telex details.",
  },
  {
    id: 2,
    icon: (
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
      //   />
      //   <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      // </svg>
      <ImProfile className="fill-current" size={40} />
    ),
    title: "Digital Business Cards",
    paragraph:
      "A digital business card is a modern and safe way to share vital information about an individual or a business. This will help you manage your online presence and provide a professional experience to your clients. These details can include a name, address, phone number, website, photo, location, user bio, social media links, and much more.",
  },
  {
    id: 3,
    icon: (
      <BsGlobe2 className="fill-current" size={40} />
    ),
    title: "Modern Websites",
    paragraph:
      "Today’s CMS (content management system) based website is now appearing more minimalistic, partly due to WordPress templates and other easy to manage solutions.  Relevant content is king, while graphics in some cases have been relegated to flat art, leaving room for a new wave of art direction.",
  },
  {
    id: 4,
    icon: (
      <GrAppsRounded className="fill-current" size={40} />
    ),
    title: "Modern Web-Apps",
    paragraph:
      "Modern web applications have higher user expectations and greater demands than ever before. Today's web apps are expected to be available 24/7 from anywhere in the world, and usable from virtually any device or screen size. Web applications must be secure, flexible, and scalable to meet spikes in demand.",
  },
  {
    id: 5,
    icon: (
      <SiAdobephotoshop className="fill-current" size={40} />
    ),
    title: "Graphics & Logo",
    paragraph:
      "If you're looking for graphic design logo for your business, you've come to the right place! Logos are usually clearer than general graphics as they tend to utilize few elements, such as shapes or colors. Graphics tend to incorporate more elements as a means to not only convey more information/feeling",
  },
  {
    id: 6,
    icon: (
      <MdDesignServices className="fill-current" size={40} />
    ),
    title: "Posters, Banners & Other Createive Items",
    paragraph:
      "Creative items design is the one that can convey a message to its audience in a unique way. The use of colors, typefaces, images, illustrations, etc. elements must stand out. The other factors such as scalability and readability of your poster should also be considered.",
  },
];
export default featuresData;
