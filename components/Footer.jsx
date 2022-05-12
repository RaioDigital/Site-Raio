import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
          href="https://site-raio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{" "}
          <Image src="/logo_raio.png" alt="Logo" width={60} height={60} />
          <span className={styles.logo}></span>
        </a>
      </footer>
    )
}