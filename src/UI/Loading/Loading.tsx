import { LinearProgress } from '@material-ui/core'
import Fade from 'react-reveal/Fade';

import loading from 'assets/loading2.svg';
import { LoadingImage, Figure } from './Loading.styles';

const factsAboutMe = [
  "Osama likes to have tea.",
  "Osama loves to hit the gym.",
  "Osama has a knack for playing video games.",
  "Osama wants to visit Mars some day."
][Math.floor(Math.random() * 4)]

const Loading = () => {
  return (
    <>
      <LinearProgress color="secondary" />
      <Figure>
        <Fade big cascade>
          <LoadingImage src={loading} />
          <figcaption>{factsAboutMe}</figcaption>
        </Fade>
      </Figure>
      <LinearProgress color="secondary" />
    </>
  )
}


export default Loading;