/* Vendor imports */
import React, { useState } from 'react';
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
// import Utils from '../../utils'
import style from './index.module.less'

import OFC from './PDFs/OFC Narrative Spreadsheet.pdf'
import Bound from './PDFs/Bound (Working Title) Design Doc.pdf'
import Mall from './PDFs/THEMALL Designs.pdf'
import Date from "./PDFs/Date N' Dash Sample.pdf"
import Escape from './PDFs/Escapril.pdf'
import Short from './PDFs/Horror Writing Sample.pdf'
import Combined from './PDFs/Writing Sample(combined).pdf'
import Stack from './PDFs/Story Stack Tarot.pdf'
import Bark from './PDFs/Bark Sheet.pdf'
import Bios from './PDFs/Character Bios.pdf'
import Dreams from './PDFs/dreams.pdf'
const Design = () => {
  const [sampleSrc, setSampleSrc] = useState('default');
  const [sampleTitle, setSampleTitle] = useState('Combined Samples');
  const [sampleDesc, setSampleDesc] = useState('A combined PDF of both design and writing samples');

    // Function to change the image source
    const ChangeSampleSrc = (newSample) => {
      setSampleSrc(newSample);

      let title = '';
      let desc = '';
      switch(newSample) {
        case 'THEMALL_Design':
          title = 'THEMALL';
          desc = 'Level designs and moodboards created for THEMALL. THEMALL is a weird game about being lost in a liminal mall, and features seven different stores for the player to explore.';
          break;
        case 'Bound_Design':
          title = 'Bound';
          desc = 'A detailed design document for a yet-to-be-made horror game. Bound is a 2.5 side-scrolling horror/stealth game that follows a young girl trying to survive an apocalyptic world. In Bound\'s world, fears have overtaken humanity and split the world into layers. Grotesque monsters now roam freely.';
          break;
        case 'OFC_Design':
          title = 'Out of Control';
          desc = 'A narrative design outline showing the voiced lines (highlighted in green), computer responses, and possible player answers. Out of Control is a interactive narrative about a conversion with an old computer. Players can only talk by copy and pasting previous responses.';
          break;
        case 'Escapril':
          title = 'A Short Story';
          desc = 'A short story written for Escapril, where the prompt was \'wishbone.\'';
          break;
        case 'Short':
          title = 'A Short Horror Story';
          desc = 'A thousand word horror story that uses font, word size and formatting to create an "interactive" linear narrative.';
          break;
        case 'DateNDash':
            title = 'Date N\' Dash Script ';
            desc = 'My contributions to the visual novel dating sim Date N\' Dash. Date N\' Dash is a time loop visual novel where every time you die, it gets faster.';
          break;
        case 'Bark':
          title = 'Bark Samples';
          desc = 'Barks for a fictional tactical RPG.';
        break;
        case 'Bios':
          title = 'Character Bios';
          desc = 'Character bios for a potential “princess builder” visual novel.';
        break;
        case 'Stack':
          title = 'Story Stack';
          desc = 'A short narrative document to outline a yet-to-be-made RPG.';
        break;
        case 'Dreams':
          title = 'Of Dreams and Nightmares: Branching Sample';
          desc = 'A section of a Twine game translated into script format.';
        break;
        default:
          title = 'Combined Samples';
          desc = 'A combined PDF of both design and writing samples';
          // code block
      }


      setSampleTitle(title);
      setSampleDesc(desc);
    }

    return (
      <Layout>
        <SEO
          title="Samples"
          description="Samples"
          path="writing-design-samples"
        />
        <div className={style.container}>
          <div className={style.dropdown}>
            <button className={style.dropbtn}><h2>Design Samples</h2></button>
            <div className={style.dropdownContent}>
              <a href='#' onClick={() => ChangeSampleSrc('Bound_Design')}>Bound: A detailed design document for a yet-to-be-made horror game</a>
              <a href='#' onClick={() => ChangeSampleSrc('OFC_Design')}><i>Out of CTRL:</i> Narrative design outline</a>
              <a href='#' onClick={() => ChangeSampleSrc('Bark')}> Barks sample from a fictional tactical RPG</a>
              <a href='#' onClick={() => ChangeSampleSrc('Stack')}> Story stack for a yet-to-be-made RPG</a>
              <a href='#' onClick={() => ChangeSampleSrc('Bios')}> Character bios for a fictional "Princess Builder" game</a>
              <a href='#' onClick={() => ChangeSampleSrc('THEMALL_Design')}><i>THEMALL:</i> Designs and moodboards</a>
            </div>
          </div>          
          
          <div className={style.dropdown}>
            <button className={style.dropbtn}><h2>Writing Samples</h2></button>
            <div className={style.dropdownContent}>
              <a href='#' onClick={() => ChangeSampleSrc('Escapril')}>A short story written during one day out of a month long writing challenge</a>
              <a href='#' onClick={() => ChangeSampleSrc('Short')}>A short, horror story, that plays with uses font, word size and formatting</a>
              <a href='#' onClick={() => ChangeSampleSrc('DateNDash')}> Script for the visual novel <i>Date N' Dash</i></a>
              <a href='#' onClick={() => ChangeSampleSrc('Dreams')}> Branching sample from <i>Of Dreams and Nightmares</i></a>
            </div>
          </div>
        </div>

        <div className={style.iconsContainer}>
          <h2>{sampleTitle}</h2>
          <p>{sampleDesc}</p>
        </div>
        
        <div className={style.container}>
          {sampleSrc === "default" && <embed title='Combined Samples' type='application/pdf' src={Combined} width="90%" height="1000vh"/>}
          {sampleSrc === "THEMALL_Design" && <embed title='THEMALL: Level Designs and Moodboards' type='application/pdf' src={Mall} width="90%" height="1000vh"/>}
          {sampleSrc === "Bound_Design" && <embed title='Bound: Design Document' type='application/pdf' src={Bound} width="90%" height="1000vh"/>}
          {sampleSrc === "OFC_Design" && <embed title='Out of Control: Narrative Design Document' type='application/pdf' src={OFC} width="90%" height="1000vh"/>}
          {sampleSrc === "Escapril" && <embed title='Short Story' type='application/pdf' src={Escape} width="90%" height="1000vh"/>}
          {sampleSrc === "DateNDash" && <embed title='DateNDash' type='application/pdf' src={Date} width="90%" height="1000vh"/>}
          {sampleSrc === "Short" && <embed title='Short Horror Story' type='application/pdf' src={Short} width="90%" height="1000vh"/>}
          {sampleSrc === "Stack" && <embed title="Story Stack" type='application/pdf' src={Stack} width="90%" height="1000vh"/>}
          {sampleSrc === "Bark" && <embed title="Barks Sheet" type='application/pdf' src={Bark} width="90%" height="1000vh"/>}
          {sampleSrc === "Bios" && <embed title="Character Bios" type='application/pdf' src={Bios} width="90%" height="1000vh"/>}
          {sampleSrc === "Dreams" && <embed title="Character Bios" type='application/pdf' src={Dreams} width="90%" height="1000vh"/>}
        </div>
      </Layout>
    )
  }

export default Design

//Original dropdown code can be found: https://codesandbox.io/p/sandbox/dropdown-hover-7pj5q