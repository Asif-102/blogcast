import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <>
      <Link href="#">
        <FaXTwitter />
      </Link>
      <Link href="#">
        <FaGithub />
      </Link>
    </>
  );
}
