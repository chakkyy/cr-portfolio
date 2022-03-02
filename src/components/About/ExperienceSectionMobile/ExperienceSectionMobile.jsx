import React from "react"

import "./ExperienceSectionMobile.scss"
import { EXPERIENCE } from "utils/constants"

const ExperienceSectionMobile = () => (
  <div id='Experience-Section-Mobile'>
    {EXPERIENCE.map((experience, i) => {
      return (
        <section key={experience.img} className='experience-item'>
          <div className='circle-index-wrapper'>
            <div className='circle-index'>{i + 1}</div>
          </div>

          <div className='column column-text'>
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
            <ul className='experience-description'>
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

export default ExperienceSectionMobile
