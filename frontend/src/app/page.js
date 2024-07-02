'use router'

'use client'

import React from 'react';
import styles from './page.module.css'
import { useState } from 'react';

function Homepage() {

  const date = new Date();
  let currentYear = date.getFullYear();

  const years = [];
  for (let i = currentYear; i >= 1958; i--) {
    years.push(<option value={i}>{i}</option>);
  }

  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(<option key={i} value={i}>{i}</option>);
  }

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')


  function selectYear() {
    var yearUser = document.getElementById("year").value;
    setYear(yearUser)
  }
  function selectMonth() {
    var monthUser = document.getElementById("month").value;
    setMonth(monthUser)
  }
  function selectDay() {
    var dayUser = document.getElementById("day").value;
    setDay(dayUser)
  }

  return (
    <div className={styles.container}>
      <div className={styles.homepage}>
        <div className={styles.upperText}>Relive it. Remember. Discover.</div>
        <div className={styles.lowerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque nisl, pellentesque a aliquet non, pharetra sed sapien. Nam at eleifend nibh. Praesent tincidunt feugiat congue. Duis ac felis fermentum, tincidunt massa at, sagittis eros. Etiam lacinia arcu vel blandit mollis. Donec mollis eget est sed ullamcorper. Aliquam a mi vitae velit condimentum fringilla non a velit.</div>
        {/* <form>
        <input id='year' name='year' value='year'/>
        <input id='month' name='month' value='month'/>
        <input id='day' name='day' value='day'/>
      </form> */}
      <div className={styles.options}>
        <select id='year' onChange={selectYear}>
          <option value="YEAR">Year</option>
          {years}
        </select>
        <select id='month' onChange={selectMonth}>
          <option value="">Month</option>
          {months}
        </select>
        <select id='day' onChange={selectDay}>
          <option value="">Day</option>
          {months}
        </select>
        </div>
        <button onClick={() => {
          window.location.href = `/createPlaylistPage?date=${year}.${month}.${day}`}}>Go to Playlist Page</button>
      </div>
    </div>
  );
}

export default Homepage;