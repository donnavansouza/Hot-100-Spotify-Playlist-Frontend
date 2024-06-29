'use router'

'use client'

import React from 'react';
import styles from './page.module.css'

function Homepage() {
  return (
    <div className={styles.homepage}>

      <div className={styles.upperText}>Relive it. Remember. Discover.</div>
      <div className={styles.lowerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque nisl, pellentesque a aliquet non, pharetra sed sapien. Nam at eleifend nibh. Praesent tincidunt feugiat congue. Duis ac felis fermentum, tincidunt massa at, sagittis eros. Etiam lacinia arcu vel blandit mollis. Donec mollis eget est sed ullamcorper. Aliquam a mi vitae velit condimentum fringilla non a velit.</div>
      <form>
        <input id='year' name='year' value='year'/>
        <input id='month' name='month' value='month'/>
        <input id='day' name='day' value='day'/>
      </form>
      <button onClick={() => { window.location.href = '/playlist' }}>Go to Playlist Page</button>
    </div>
  );
}

export default Homepage;