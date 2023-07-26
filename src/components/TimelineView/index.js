// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        theme={{
          primary: 'blue',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: 'violet',
          titleColor: 'blue',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachTimeLine => {
          if (eachTimeLine.categoryId === 'COURSE') {
            return <CourseTimelineCard courseTimelineDetails={eachTimeLine} />
          }
          return <ProjectTimelineCard projectTimelineDetails={eachTimeLine} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
