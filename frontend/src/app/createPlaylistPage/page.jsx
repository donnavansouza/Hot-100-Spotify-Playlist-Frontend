'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';



export default async function PlaylistPage() {
    let aux = 0;
    async function fetchPlaylistId() {
        try {
            const response = await fetch('http://localhost:8000/createPlaylist/%7Byear:month:day%7D?year=2010&month=08&day=29', { method: 'GET' });
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