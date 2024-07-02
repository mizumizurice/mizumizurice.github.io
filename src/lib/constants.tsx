import { AiOutlineUser } from "react-icons/ai";
import {
  FaBilibili,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiMisskey } from "react-icons/si";

export const socialLink = [
  {
    icon: <FaXTwitter size="24" />,
    title: "socialLink.x",
    href: "https://twitter.com/mizumizurice",
    description: "socialLink.xDesc",
  },
  {
    icon: <FaSoundcloud size="24" />,
    title: "socialLink.soundCloud",
    href: "https://soundcloud.com/mizumizurice",
    description: "socialLink.soundCloudDesc",
  },
  {
    icon: <FaInstagram size="24" />,
    title: "socialLink.instagram",
    href: "https://www.instagram.com/mizumizurice/",
  },
  {
    icon: <FaYoutube size="24" />,
    title: "socialLink.youTube",
    href: "https://www.youtube.com/@mizumizurice",
  },
  {
    icon: <FaBilibili size="24" />,
    title: "socialLink.bilibili",
    href: "https://space.bilibili.com/622739258",
    description: "socialLink.bilibiliDesc",
  },
  {
    icon: <FaGithub size="24" />,
    title: "socialLink.github",
    href: "https://github.com/mizumizurice",
  },
  {
    icon: <SiMisskey size="24" />,
    title: "socialLink.misskeyIo",
    href: "https://misskey.io/@mizumizurice",
  },
];

export const pagesLink = [
  {
    icon: <AiOutlineUser size="24" />,
    title: "pagesLink.profile",
    href: "/profile",
    description: "pagesLink.profileDesc",
  },

  // {
  //   icon: <AiOutlineUser size="24" />,
  //   title: "Socialプロジェクト",
  //   href: "/project/social",
  //   description: "現在進行中のプロジェクトについてのご案内です",
  // },
  // {
  //   icon: <AiOutlineCode size="24" />,
  //   title: "開発",
  //   href: "/project",
  //   description: "公開しているパッケージなどのご案内をいたします",
  // },
];
