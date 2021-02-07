import React from 'react'

import Deadline from './deadline'
import { DevPageHeading } from './index'

const Schedule = ({ deadlines }) => {
  return (
    <>
      <DevPageHeading>Schedule</DevPageHeading>
      {deadlines.length > 0 &&
        deadlines.map(deadline => (
          <Deadline key={deadline.date} {...deadline} />
        ))}
    </>
  )
}

export default Schedule
