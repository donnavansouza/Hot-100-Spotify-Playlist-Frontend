'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css'


const PlaylistPage = ()=>  {
    const searchParams = useSearchParams();
    const date = searchParams.get('date').split('.')
    const year = date[0]
    const month = date[1]
    const day = date[2]

    const [loading, setLoading] = useState(true);
    const [playlistId, setPlaylistId] = useState(null);

    useEffect(() => {
        const getPlaylist = async () => {
            try {
                const response = await fetch(`http://localhost:8000/createPlaylist/{year:month:day}?year=${year}&month=${month}&day=${day}`, { method: 'GET' });
                const data = await response.json();
                setPlaylistId(data)
                setLoading(false)
                console.log('Playlist data:', data);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }
        getPlaylist();
    },
        [])

    console.log('PlaylistId:', playlistId);



    if (loading) {
        return (
            <div className={styles.container}>
                <h1>Creating Playlist</h1>
                <CircularProgress />
                <p>Playlist is not ready yet. Please wait...</p>
            </div>
        );
    } else {
        redirect(`/PlaylistPage?playlistId=${playlistId}`);
    }
}

export default PlaylistPage;