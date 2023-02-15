import { useEffect, useState } from 'react'
import axios from 'axios';
import './About.css'
// import me from './me.jpg'

// const About = props => {
  // return (
  //   <>
  //     <h1>About Us!</h1>
  //     <p>Hi, I'm CLaire. I'm a third year student at NYU, majoring in computer science and minoring in psychology. I'm originally from Maryland, but I currently live in east village NYC. However, I rarely go home to Maryland; instead, I typically visit my sister and nephew in Minnesota during my breaks. In my free time I enjoy exploring flea markets, making jewelry, and trying new resturants.</p>
  //     <img class="resize" src={me} />
  //   </>
  // )
// }

const About = props => {
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        setTitle(response.data.title)
        setDescription(response.data.description)
        setImage(response.data.image)
      })
      .catch((error) => {
        setError(`error error error! ${error}`)
      });
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <img class="resize" src={image}/>
    </>
  )
}

export default About
