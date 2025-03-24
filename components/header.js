import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        {/* <img src={logo.src} alt="Mobile phone with posts feed on it" /> */}
        <Image
          src={logo}
          alt="Mobile phone with posts feed on it"
          // width={100}
          // height={100}
          sizes="10vw"
          priority // this ensures that the image is pre-loaded instead of lazy loading
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
