/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Config from '../../../config'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
// import Utils from '../../utils'
import style from './index.module.less'
import TagList from '../../components/tag-list'
import Utils from '../../utils'

//IMAGES
import IEYTD from './PDFs/IEYTD.jpg'
import SilentSlayer from './PDFs/SilentSlayer.jpg'
import AmoungUS from './PDFs/AUVR.jpg'
import BB from './PDFs/Brought-back.gif'
import Church from '../../../content/Church/ChurchOutsideView.png'
import OOC from '../../../content/OutOfCTRL/Images/screencap_one.gif'
import THEMALL from '../../../content/TheMall/f.png'
import AU from '../../../content/AbsoluteUnit/g.png'
import Date from '../../../content/Date-n-Dash/h.png'



function SortObjects(a, b)
{
  return a.node.frontmatter.listIndex - b.node.frontmatter.listIndex;
}

const Writing = () => {
  return (
      <Layout>
        <SEO
          title="Writing Samples"
          description="Writing Samples"
          path="writing-samples"
        />
        <div className={style.container}>
          <div className={style.content}><h2>Released Work</h2></div>
              <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://iexpectyoutodie.schellgames.com/three')} key={'IEYTD3'} className={style.post}>
                <div className={style.cover}>          
                    <img
                      className={style.photo}
                      src={IEYTD}
                      title={'IEYTD3'}
                      alt={'IEYTD3'}
                    />
                </div>
                <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://iexpectyoutodie.schellgames.com/three')}>
                    <h2>{'I Expect You to Die 3'}</h2>
                    <p>{'A VR spy fantasy, puzzle, escape the room game.'}</p>
                    <TagList tags={['design', 'narrative_design']} />
                </Link> 
              </Link>

              <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://www.innersloth.com/games/among-us-vr/')} key={'AUVR'} className={style.post}>
                <div className={style.cover}>          
                    <img
                      className={style.photo}
                      src={AmoungUS}
                      title={'AUVR'}
                      alt={'AUVR'}
                    />
                </div>
                <Link className={style.content} target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://www.innersloth.com/games/among-us-vr/')}>
                    <h2>{'Among Us VR'}</h2>
                    <p>{'The classic game of lying and betrayal now in VR!'}</p>
                    <TagList tags={['design']} />
                </Link> 
              </Link>

              <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://silentslayer.schellgames.com/')} key={'SilentSlayer'} className={style.post}>
                <div className={style.cover}>          
                    <img
                      className={style.photo}
                      src={SilentSlayer}
                      title={'SilentSlayer'}
                      alt={'SilentSlayer'}
                    />
                </div>
                <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://silentslayer.schellgames.com/')}>
                    <h2>{'Silent Slayer'}</h2>
                    <p>{'A horror puzzle game where players slay the vampires, or die trying.'}</p>
                    <TagList tags={['design']} />
                </Link> 
              </Link>

          <div className={style.content}><h2>Game Jams and Solo Projects</h2></div>

          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://cmrnprry.itch.io/brought-back-wrong')} key={'BB'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={BB}
                  title={'BB'}
                  alt={'BB'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://cmrnprry.itch.io/brought-back-wrong')}>
                <h2>{'Brought Back Wrong: An Interactive Fiction Anthology'}</h2>
                <p>{'Brought Back Wrong: An Interactive Fiction Anthology is a collaborative IF game focused on the trope of "you came back wrong." I brought together, and collaborated with, four other writers to show both perspectives of a relationship of the person who brought someone back and the person who was brought back.'}</p>
                <TagList tags={['writing', 'narrative_design', 'production']} />
            </Link> 
          </Link>
          
          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://cmrnprry.itch.io/the-church-at-the-end-of-the-street')} key={'Church'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={Church}
                  title={'Church'}
                  alt={'Church'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://cmrnprry.itch.io/the-church-at-the-end-of-the-street')}>
                <h2>{'The Church at the End of the Street'}</h2>
                <p>{'Originally a small project made of an interactive narrative course, The Church at the End of the Street is a horror interactive fiction game about a strange church that won\'t leave you alone. It features branching, nonlinear paths, and multiple endings.'}</p>
                <p>This game is not yet released. Please use password "church" to access it.</p>
                <TagList tags={['writing', 'narrative_design', 'solo']} />
            </Link> 
          </Link>
          
          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://ezra-szanton.itch.io/out-of-ctrl')} key={'OOC'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={OOC}
                  title={'OOC'}
                  alt={'OOC'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://ezra-szanton.itch.io/out-of-ctrl')}>
                <h2>{'Out of Control'}</h2>
                <p>Made for the 2020 Game Maker's Toolkit Game Jam, Out of Control is a horror game where the player has a conversation with an old computer. While the computer can say whatever it wants, the player can only copy and paste the text on screen. It was rated <b>#19 in originality</b> and <b>#251 overall</b> out of <b>5,357</b> total entries. Since release, it has amassed over <b>37k browser plays and 54.3k views.</b></p>
                <TagList tags={['writing', 'narrative_design']} />
            </Link> 
          </Link>

          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://jelindo.itch.io/weird-mall')} key={'THEMALL'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={THEMALL}
                  title={'THEMALL'}
                  alt={'THEMALL'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://jelindo.itch.io/weird-mall')}>
                <h2>{'THEMALL'}</h2>
                <p>{'THEMALL was made for the Global Game Jam 2021, and was fully inspired by liminal spaces. THEMALL is a short game about being lost in a liminal mall. It features seven different stores to explore, all with their own quirks, and one hidden ending.'}</p>
                <TagList tags={['writing', 'environment_design']} />
            </Link> 
          </Link>

          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://cmrnprry.itch.io/absolute-unit')} key={'AU'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={AU}
                  title={'AU'}
                  alt={'AU'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://cmrnprry.itch.io/absolute-unit')}>
                <h2>{'Absolute Unit'}</h2>
                <p>{'Made for a 48 hour game jam, Absolute Unit is a fun, light-hearted RPG Maker game about Boofas, a skinny lost looking for an owner. The quickest way to do this, is to become a fat, absolute unit of a dog. Beg for treats, make friends, and become the biggest boy.'}</p>
                <TagList tags={['writing', 'design', 'programming']} />
            </Link> 
          </Link>
          
          <Link target="_blank" rel="noopener noreferrer" to={Utils.resolvePageUrl('https://cmrnprry.itch.io/date-n-dash')} key={'Date'} className={style.post}>
            <div className={style.cover}>          
                <img
                  className={style.photo}
                  src={Date}
                  title={'Date'}
                  alt={'Date'}
                />
            </div>
            <Link target="_blank" rel="noopener noreferrer" className={style.content} to={Utils.resolvePageUrl('https://cmrnprry.itch.io/date-n-dash')}>
                <h2>{'Date N\' Dash'}</h2>
                <p>Date N' Dash was during a week long jam to answer the question: <i>"What if a dating sim, but every time you died it got faster?"</i> In this time-loop dating sim, you play as Lyla, a firefighter who keeps reliving the same day, and dating the same girl. However, with every new day, she find herself further along in the relationship.</p>
                <TagList tags={['writing', 'design', 'programming']} />
            </Link> 
          </Link>
               
        </div>
      </Layout>
  )
}

export default Writing
