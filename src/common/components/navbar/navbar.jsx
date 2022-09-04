import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.left}>
          <Image
            className={styles.logo}
            src="/logo.png"
            width={50}
            height={50}
          />
          LoickTeam
        </section>
        <ul className={styles.right}>
          <li>
            <Link href="#loick">What is loick?</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#team">Our Team</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
