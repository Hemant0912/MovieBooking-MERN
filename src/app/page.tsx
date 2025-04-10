"use client"
import Image from 'next/image'
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import styles from "./page.module.css";
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

export default function Home() {
  return (
      <main className={styles.main}>
     <HomeSlider />
     <MovieCarousel />
  </main>
  )
}
