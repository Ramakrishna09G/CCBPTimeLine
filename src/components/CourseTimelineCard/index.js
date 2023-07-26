// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseTimelineDetails

  return (
    <div className="course-time-line-details-container">
      <div className="title-and-duration-card">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle className="clock-img" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="tag-item">
            <p type="button" className="tag-name">
              {eachTag.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
