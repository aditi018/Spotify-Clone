import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
        className='footer__albumLogo'
         src='https://4.bp.blogspot.com/-oiu0oQ2MpTo/V3F66bfKFiI/AAAAAAAAVp0/v27YFTox6qYPwUIiJqapRqFNUjmL5f-JACLcB/s1600/Mixtape%2BCover%2BDesign%2B-%2BCD%2BCover%2BDesigner%2B-%2BMusic%2BCover%2BArtwork%2B-%2BGraphic%2BDesign%2B-%2BiTunes%2BCover%2BDesign%2B-%2BBuy%2BAlbum%2BCovers%2B-%2BEP%2BCover%2BDesign%2BCreator%2B-%2BCover%2BPhoto%2BMaker%2B-%2B147.jpg' alt='' />
        <div className='footer__songInfo' >
          <h4>Yeah</h4>
          <p>.......</p>
        </div>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
