import { Link } from 'react-router-dom'
import logo from './logo512.png'

const About = () => {
  return (
    <div>
      <img src={logo} alt="blank" height="50px" className={logo} />
      <h4>Created using React state and hooks</h4>
      <p>Laura Mooney <strong>2022</strong></p>
      <br></br>
      <Link to='/'>Go Back to main page</Link>
    </div>
  )
}

export default About