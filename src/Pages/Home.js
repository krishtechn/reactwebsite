import React from 'react'
import Aboutme from '../Components/Aboutme'

const Home = () => {
  let details = {
    title:"to Technical krish",
    subtitle: "Hello Guyz this is me krish kharal from Bayatari I am a computer Engineer, IT Professional, website Developer, App developer, Freenlancer. I work as a software Engineer. I will make website for my client.",
    btn1:"Learn Courses",
    btn2:"Explore Blog",
    profile:"./profile.jpg",
  }
  return (
    <>
     <Aboutme data={details}/>
    </>

  )
}

export default Home