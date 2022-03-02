import React from "react"

import "./ExperienceSection.scss"
import { EXPERIENCE } from "utils/constants"

const ExperienceSection = () => (
  <div id='Experience-Section'>
    {EXPERIENCE.map((experience, i) => {
      const isEven = i % 2 === 0

      return (
        <section
          key={experience.img}
          style={{ flexDirection: isEven ? "row" : "row-reverse" }}
          className='experience-item'
        >
          <div className='column column-img'>
            <div className='img-wrapper'>
              <img
                src={`/${experience.img}-small.png`}
                alt={experience.name}
                className={experience.img}
              />
            </div>
          </div>
          <div className='timeline'>
            <div className='start-line line' />
            <div className='circle-index-wrapper'>
              <div className='circle-index'>{i + 1}</div>
            </div>
            <div className='end-line line' />
          </div>
          <div
            className='column column-text'
            style={{ alignItems: isEven ? "flex-start" : "flex-end" }}
          >
            <div className='experience-sector'>
              {experience.sector} - Buenos Aires, Argentina
            </div>
            <div className='experience-title'>
              {experience.name}
              {experience.isFreelance && (
                <>
                  <span> - </span>
                  <div className='freelance-badge'>Freelance</div>
                </>
              )}
            </div>
            <div className='experience-date'>{experience.date}</div>
            <ul
              className='experience-description'
              style={{ textAlign: isEven ? "left" : "right" }}
            >
              {experience.description.map((item) => (
                <li key={item} className='description-item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )
    })}
  </div>
)

export default ExperienceSection
