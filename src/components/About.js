import React from 'react'

function About(props) {
  const image = props.image ?  <img src={props.image} alt="blog logo" /> : <img src='https://via.placeholder.com/215' alt="blog logo"  />;
  return (
   <aside>
      {image}
        <p>{props.about}</p>
   </aside>
  )
}

export default About