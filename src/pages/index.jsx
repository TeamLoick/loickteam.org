import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Navbar from '../common/components/navbar/navbar';
import HeadPartial from '../common/components/HeadPartial';
export default function Home() {
  return (
    <div className={styles.container}>
      <HeadPartial />
      <Navbar />
      <main></main>
    </div>
  );
}
