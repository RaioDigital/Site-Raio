import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo_raio.png" width="50" height="50" alt="Raio Digital" />
      </div>
      <li className="nav_itens">
        <Link href="home">
          <a>Home</a>
        </Link>
      </li>

      <li className="nav_itens">
        <Link href="projetos">
          <a>Projetos</a>
        </Link>
      </li>

      <li className="nav_itens">
        <Link href="quem_somos">
          <a>Quem Somos</a>
        </Link>
      </li>

      <li>
        <Link href="administrador">
          <button className={styles.btn_adm}>Administrador</button>
        </Link>
      </li>
    </ul>
  )
}
