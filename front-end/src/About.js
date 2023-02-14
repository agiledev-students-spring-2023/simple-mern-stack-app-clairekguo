import { Link } from 'react-router-dom'
import me from './me.jpg'
import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About Us!</h1>
      <p>Hi, I'm CLaire. I'm a third year student at NYU, majoring in computer science and minoring in psychology. I'm originally from Maryland, but I currently live in east village NYC. However, I rarely go home to Maryland; instead, I typically visit my sister and nephew in Minnesota during my breaks. In my free time I enjoy exploring flea markets, making jewelry, and trying new resturants.</p>
      <img class="resize" src={me} />
    </>
  )
}

// make this component available to be imported into any other file
export default About
