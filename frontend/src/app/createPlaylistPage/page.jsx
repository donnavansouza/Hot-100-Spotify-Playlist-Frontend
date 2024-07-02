'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';



export default async function PlaylistPage() {

    const searchParams = useSearchParams();



    const date = searchParams.get('date').split('.')
    const year = date[0]
    const month = date[1]
    const day = date[2]

    let aux = 0;
    async function fetchPlaylistId() {
        try {
            const response = await fetch(`http://localhost:8000/createPlaylist/%7Byear:month:day%7D?year=${year}&month=${month}&day=${day}`, { method: 'GET' });
            const data = await response.json();
            aux = 1;
            console.log('Playlist data:', data);
            return data;
        } catch (error) {
            console.error('Error fetching playlist:', error);
            return null;
        }
    }
    const playlistId = await fetchPlaylistId();
    console.log('PlaylistId:', playlistId);

    

    if (aux === 0) {
        return (
            <div>
                <h1>Creating Playlist</h1>
                <CircularProgress />
                <p>Playlist is not ready yet. Please wait...</p>
            </div>
        );
    } else {
        redirect(`/PlaylistPage?playlistId=${playlistId}`);
    }
}