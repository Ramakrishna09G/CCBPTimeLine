// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineDetails

  return (
    <div className="project-time-line-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-and-duration-card">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar className="calendar-img" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
