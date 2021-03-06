import React, { useEffect, useRef } from "react"

import "./HeroScene.scss"
import { useWindowSize } from "hooks/useWindowSize"

const HeroScene = () => {
  const windowSize = useWindowSize()
  const heroScene = useRef(null)
  const whistleRef = useRef(null)
  const gamepadRef = useRef(null)
  const cubeRef = useRef(null)
  const rocketRef = useRef(null)

  const moveSectionElements = (e) => {
    const pageMiddleX = window.innerWidth / 2
    const pageMiddleY = window.innerHeight / 2
    const distanceFromMiddleX = e.clientX - pageMiddleX
    const distanceFromMiddleY = e.clientY - pageMiddleY

    whistleRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * -0.1
    },${distanceFromMiddleY * -0.1},0,1)`

    cubeRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.1
    },${distanceFromMiddleY * 0.1},0,1)`

    rocketRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.2
    },${distanceFromMiddleY * 0.3},0,1)`

    gamepadRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * -0.06
    },${distanceFromMiddleY * -0.08},0,1)`
  }

  useEffect(() => {
    if (windowSize.width < 420) {
      return
    }

    const section = heroScene.current
    section.addEventListener("mousemove", moveSectionElements, false)
    return () =>
      section.removeEventListener("mousemove", moveSectionElements, false)
  }, [windowSize.width])

  return (
    <div ref={heroScene} id='HeroScene'>
      <h1>
        <div>ReactJs</div> <div>Front-end developer</div>
      </h1>
      <div className='subtitle'>Typescript - NextJs - Redux - React Native</div>
      <img
        ref={gamepadRef}
        className='hero-gamepad hero-picture'
        src='gamepad-small.png'
        alt='gamepad'
      />
      <img
        ref={whistleRef}
        className='hero-whistle hero-picture'
        src='whistle-small.png'
        alt='whistle'
      />
      <img
        ref={cubeRef}
        className='hero-cube hero-picture'
        src='cube-small.png'
        alt='cube'
      />
      <img
        ref={rocketRef}
        className='hero-rocket hero-picture'
        src='rocket-small.png'
        alt='rocket'
      />
      <div className='availability hero-picture'>
        <i className='far fa-clock' />
        Open to work
      </div>
      <img
        className='small-stripes'
        src='white_stripes.svg'
        alt='stripe'
        aria-hidden='true'
      />
      <img
        className='big-stripes'
        src='white_stripes.svg'
        alt='stripe'
        aria-hidden='true'
      />
      <div className='dot white-dot-top' />
      <div className='dot white-dot-bottom' />
      <div className='dot white-dot-medium-top' />
      <div className='dot white-dot-medium' />
    </div>
  )
}

export default HeroScene
