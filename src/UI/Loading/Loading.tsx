import { LinearProgress } from '@material-ui/core'

import loading from 'assets/loading2.svg';
import { LoadingImage } from './Loading.styles';

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
      <figure style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh"}}>
        <LoadingImage src={loading} />
        <figcaption>{factsAboutMe}</figcaption>
      </figure>
    </>
  )
}


export default Loading;