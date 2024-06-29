'use client';

import React from 'react';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


export default function PlaylistPage() {

  const searchParams = useSearchParams();

  const playlistId = searchParams.get('playlistId');

  // const router = useRouter();
  // const playlistId = router.query;
  console.log('PlaylistId:', playlistId);

  return (
    <div>
      <h1>Playlist</h1>
      <PlaylistCard playlistId={playlistId} />
    </div>
  );
}
