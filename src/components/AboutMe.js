import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import pdfIcon from '../Media/Images/pdfIcon.jpg';
import googleDocsIcon from '../Media/Images/googleDocsIcon.png';

import '../CSS/AboutMe.css';

function AboutMe() {
  const navigate = useNavigate()

  /*
  Welcome to hell, secretary! You've just started day one at the most unorganized company ever and it's your job to sort the schedules out.
  The bigwigs are trying to get together and find a profitable path forward but they need help scheduling their meetings. That's where you come in and 
  step one is to find all of the overbooked meetings.
  
  You are given a set of meeting start times and their planned durations. You have to figure out if there are any conflicts, and if there are, then keep track of
  the count of conflicts and the total time of conflicts. That's when the big bucks start rolling in, because the more conflicts there are, the more valuable you are to
  the company, or something, who knows.
  
  Let's get to work: A conflict consists of an overlap between two meetings. In the examples below, if there are any conflicts then the count of conflicts and the
  total time of overlapping meetings are returned in an array. 
  
  Ex. 1 ->
  The first meeting started at 8 o'clock in the morning and lasts for 45 minutes but another meeting is starting at 8:30 in the morning and will last for
  30 minutes.
  ```
  'RESULT', beepboop(['0800,45', '0830,30'])) // --> [1, 15]
  ```

  Ex. 2 ->
  There are no conflicts so return a reference phrase to 'Office Space' or any string other than 'error'. 
  Really, any phrase you like, and I'll give you a Clever upvote. Unless you use the 'OOO face' phrase, then you're getting a Best Practices upvote only.
  ```
  'RESULT', beepboop(['0800,30', '0930,45', '1145,60', '1245,45'])) // --> No problems today, better make sure those TPS reports are in order!
  ```

  Ex. 3 ->
  There are 3 conflicts for today's meetings so the correct result should include 3, for the meetings and the total over lapping time of 75 minutes.
  ```
  count = 1 // --> meeting[0] conflicts with meeting[1]
  overlap = 30 // --> all of meeting[0] overlaps with meeting[1]
  count = 2 // --> meeting[0] conflicts with meeting[2]
  overlap = 45 // --> the last 15 minutes of meeting[0] overlaps the first 15 minutes of meeting[2]
  count = 3 // --> meeting[1] conflicts with meeting[2]
  overlap = 75 // --> the last 30 minutes of meeting[1] overlaps all of meeting[2]
  'RESULT', beepboop(['0800,30', '0800,45', '0815,45'])) // --> [3, 75]
  ```

  Ex. 4 ->
  If one of the rules are broken then return 'error'.
  ```
  'RESULT', beepboop(['2515,43', '1230,45', '1030,115', '1100,43'])) // error
  ```
  
  RULES:
  1. All input meeting start times are formatted in military time.
  2. All input meeting durations are in minutes AND will never be less than 1 minute or greater than 120 minutes.
  3. Input array contains string elements consisting of [(meeting start time), (meeting duration)].
  4. Input array will only contain meetings for todays work day, from 8am to 6pm, no overtime at this awesome company. They probably allow WFH and have like a 4 day work week because YEAH!!
  5. Two overlapping meetings will count as a single conflict.
  6. Meeting start and end times do not overlap as shown in example No. 2.

  */
  
  function beepboop (meetings) {
    // calculates the end time of the meeting
    const end = (s, d) => {
      if (s % 100 + d >= 60) return s - (s % 100) + (s % 100 + d === 60 ? 100 : ((s % 100 + d) % 60) + Math.floor(((s % 100 + d) / 60)) * 100)
      else return s + d;
    };
    // calculate the overlap amount
    const calcMin = (s, e) => {
      const hours = (n) => ((n - (n % 100)) / 100); 
      return e - s - ((hours(e) - hours(s)) * 40);
    };
    console.log("STARTSTARTSTARTSTART")
    // initialize overlaps and duration to push conflicts into
    let [overlaps, duration] = [0, 0]
    //update the conflicts
    console.log('overlaps', overlaps, duration)
    // const update = (d) => {console.log('update firing', overlaps, meetings); return [overlaps + 1, duration + d]};
    console.log('meetings start-->', meetings)
    // make a new 2D array with elements including [start, duration, finish] and sorts by start time
    meetings = meetings.map((e) => {let [s, d] = e.split(','); return [+s, +d, end(+s, +d)]}).sort((a, b) => a[0] - b[0]);
    console.log('meetings', meetings)
    // check for edge cases and return error if met
    if ( meetings.find((e) => {const [s, d, f] = e; return f > 1800 || s < 800 || d > 120 || d < 1}) || false ) return 'error';
    make the ej<=ei portion count the whole overlap, its not doing that right now
    //loop through all meetings to find the conflicts
    for ( let i = 0, j = 1; i < meetings.length - 1; j++ ) {
      const [sI, _, eI, sJ, __, eJ] = meetings[i].concat(meetings[j]); 
      //if start of i meeting is after or equal to start of j meeting AND before end of j meeting
      // console.log(i, j)
      console.log('checking the vals', 'sI', sI, 'eI', eI, 'sJ', sJ, 'eJ', eJ)
      if (eJ > sI && eI > sJ) {
        // j contained in i
        if ( eJ <= eI ) {
          console.log('j contained in i calcmin', overlaps, duration, calcMin(eJ, eI) + calcMin(sI, sJ), '+ vals', [sI, _, eI, sJ, __, eJ])
          const o = calcMin(eJ, eI) + calcMin(sI, sJ);
          [overlaps, duration] = [overlaps + 1, duration + o];
          console.log('j contained in i updated overlaps and duration', overlaps, duration)
        } else {
          console.log('j not contained in i calcmin', overlaps, duration, calcMin(sJ, eI), '+ vals', [sI, _, eI, sJ, __, eJ]);
          [overlaps, duration] = [overlaps + 1, duration + calcMin(sJ, eI)];
          console.log('j not contained in i updated overlaps and duration', overlaps, duration)
        };
      };
      if ( j + 1 >= meetings.length ) {
        // console.log('j reached the end')  
        i++; 
        j = i; 
      };
    };    

    // console.log('overlaps', overlaps, duration)
    // console.log('answer', overlaps > 0 ? [overlaps, duration] : 'generic office space quote')
    console.log('                               ')
    // return the number of conflicts and qty or a string saying everything is cool
    return overlaps > 0 ? [overlaps, duration] : 'generic office space quote';
  };

  function runzetest () {  
    // console.log('RESULT', beepboop(['0800,30', '0900,45']), 'generic office space quote') 
    // console.log('RESULT', beepboop(['0900,30', '0900,45']), [1, 30])
    // console.log('RESULT', beepboop(['0745,30', '0930,45', '1145,60', '1330,45']), 'error')
    console.log('RESULT', beepboop(['0800,45', '0800,30', '0830,45']), [2, 45])
    console.log('RESULT', beepboop(['0800,45', '0900,30']), 'generic office space quote')
    console.log('RESULT', beepboop(['0800,45', '0830,30']), [1, 15])
    console.log('RESULT', beepboop(['0800,30', '0800,45', '0815,45']), [3, 75])
    console.log('RESULT', beepboop(['0730,60', '0930,60', '1330,45', '1530,45']), 'error')
    console.log('RESULT', beepboop(['0800,30', '1130,60', '0815,45']), [1, 15])
    console.log('RESULT', beepboop(['0900,30', '0915,60', '0945,45']), [2, 45])
    console.log('RESULT', beepboop(['1215,45', '1200,30', '1215,60']), [3, 75]) 
    console.log('RESULT', beepboop(['2515,43', '1230,45', '1030,115', '1100,43']), 'error')
    console.log('RESULT', beepboop(['1230,45', '1030,90', '1100,43']), [1, 43])
    console.log('RESULT', beepboop(['12:30,45', '1:15am,90', '1500,80']), 'error')
    console.log('RESULT', beepboop(['1011,17', '1348,119', '1500,80']), [1, 47])
    console.log('RESULT', beepboop(['0930,45', '1005,35', '1730,45']), 'error')
    console.log('RESULT', beepboop(['0815,-45', '0800,90', '1100,50']), 'error')
  }


  // 1. All input meeting start times are in military format.
  // 2. All input meeting durations are in minutes .
  // 3. Input array contains string elements consisting of [(meeting start time), (meeting duration)].
  // 5. Two overlapping meetings will count as a single conflict.
  // 6. Meeting start and end times do not overlap as shown in example No. 2.
  // need to start meetings at the same time and end at the same time







  // add a specific about me section, talk about how i got into code, where I used it when it clicked, why im technology oriented and what I love
  // about continuing in software development
  // This “About Me” section wouldn’t work for anyone else (well, unless they were willing to
  //   make up a big lie about their history!), and that’s the point. It’s true to who I am, and shares
  //   a compelling window into my personality and experience.
  //potentially add an anecdote or some keywords that interest the candidate enough to continue reading through it fully and remain in their memory

  //juliacodes.com is a good resource for creating project templates for the description

  //make a day mode and night mode for browsing, colors are kind of silly

  // include an easter egg in the console, maybe just 42
  return (
    <>

    <div className="about-container">
    <div><button onClick={runzetest}>test the function</button></div>
      <div className="about-title">
        {/* change animation to rotate 360 on y and then backflip */}
        <div className="title-row">
          <h1 className="title-letters">
            <span id="about-W">W</span>
            <span id="about-E">E</span>
            <span id="about-L">L</span>
            <span id="about-C">C</span>
            <span id="about-O">O</span>
            <span id="about-M">M</span>
            <span id="about-Ex2">E</span>
            <span id="about-wave">👋</span>
          </h1>
        </div>
        <div className="title-row">
          <h1 className="title-letters">
            <span id="about-Mx2">M</span>
            <span id="about-Y">Y</span>&nbsp;

            <span id="about-N">N</span>
            <span id="about-A">A</span>
            <span id="about-Mx3">M</span>
            <span id="about-Ex3">E</span>&nbsp;

            <span id="about-I">I</span>
            <span id="about-S">S</span>&nbsp;

            <span id="about-Ix2">I</span>
            <span id="about-G">G</span>
            <span id="about-Ox2">O</span>
            <span id="about-R">R</span>&nbsp;

            <span id="about-Mx4">M</span>
            <span id="about-Ex4">E</span>
            <span id="about-Sx2">S</span>
            <span id="about-T">T</span>
            <span id="about-Ex5">E</span>
            <span id="about-Cx2">C</span>
            <span id="about-H">H</span>
            <span id="about-K">K</span>
            <span id="about-Ix3">I</span>
            <span id="about-Nx2">N</span>

          </h1>
        </div>
        <div className="title-row">
          <h1 className="title-letters">
            <span id="about-Ix4">I</span>
            <span id="about-apostrophe">'</span>
            <span id="about-Mx5">M</span>&nbsp;

            <span id="about-Ax2">A</span>&nbsp;

            <span id="about-F">F</span>
            <span id="about-U">U</span>
            <span id="about-Lx2">L</span>
            <span id="about-Lx3">L</span>&nbsp;

            <span id="about-Sx3">S</span>
            <span id="about-Tx2">T</span>
            <span id="about-Ax3">A</span>
            <span id="about-Cx3">C</span>
            <span id="about-Kx2">K</span>&nbsp;

            <span id="about-D">D</span>
            <span id="about-Ex6">E</span>
            <span id="about-V">V</span>
            <span id="about-Ex7">E</span>
            <span id="about-Lx4">L</span>
            <span id="about-Ox3">O</span>
            <span id="about-P">P</span>
            <span id="about-Ex8">E</span>
            <span id="about-Rx2">R</span>&nbsp;

            <span id="about-Ax4">A</span>
            <span id="about-Nx3">N</span>
            <span id="about-Dx2">D</span>&nbsp;

            <span id="about-Lx5">L</span>
            <span id="about-Ix5">I</span>
            <span id="about-Fx2">F</span>
            <span id="about-Ex9">E</span>
            <span id="about-Lx6">L</span>
            <span id="about-Ox4">O</span>
            <span id="about-Nx4">N</span>
            <span id="about-Gx2">G</span>&nbsp;

            <span id="about-Lx7">L</span>
            <span id="about-Ex10">E</span>
            <span id="about-Ax5">A</span>
            <span id="about-Rx3">R</span>
            <span id="about-Nx5">N</span>
            <span id="about-Ex11">E</span>
            <span id="about-Rx4">R</span>
          </h1>
        </div>

      </div>

        <div className="about-left">
          {/* <p className='about-left-description'>
          Full Stack Developer && Language Enthusiast
        </p> */}

        </div>

        <div className='about-right'>
          {/* <div className='about-right-title'> About Me </div>
        <p className='about-right-description'>
          About me from Linkedin
        </p> */}
        </div>

        <div className="about-bottom">
          {/* <div className='about-left-button-box'>
          <button 
            onClick={() => navigate('/contact')} 
            className='about-contact-button'
          >
            Contact me!
          </button>
          <div className='about-resume-box'>
            <h2 className='about-resume-title'>My Resume:</h2>
            <div className="about-resume-buttons-wrapper">
              <a
                href="Igor-M-Resume-3-25-22.pdf"
                download
                >
                  <img 
                    className='about-resume-pdf'
                    src={pdfIcon}
                    alt="Resume_PDF"
                  />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className='about-resume-googleDocs'
                  src={googleDocsIcon}
                  alt="Resume_GoogleDocs"
                />
              </a>
            </div>
          </div>
        </div> */}
        </div>

      </div>
    </>
  )
}

export default AboutMe;