'use client';

import React from 'react';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css'


export default function PlaylistPage() {

  const searchParams = useSearchParams();

  const playlistId = searchParams.get('playlistId');

  // const router = useRouter();
  // const playlistId = router.query;
  console.log('PlaylistId:', playlistId);

  return (
    <div className={styles.container}>
      <div className={styles.playlistText}>
      <h1>Here's Your</h1>
      <h1>Playlist.</h1>
      <h1>Enjoy!</h1>
      </div>
      <div className={styles.playlistCard}>
      <PlaylistCard playlistId={playlistId} />
      </div>
    </div>
  );
}
