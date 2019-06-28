import React from 'react'
import StudentCard from './StudentCard'

function StudentList(props) {
  const {students, percentageAbsenteeism} = props

  return <div>
    {students.map(student => {
      const {studentId, attendancePercentage} = student
      const absencePercentage = 100 - attendancePercentage
      const atOrExceedingAbsenceThreshold = absencePercentage >= percentageAbsenteeism
      if (atOrExceedingAbsenceThreshold) {
        return <StudentCard key={studentId} {...student} absencePercentage={absencePercentage}/>
      }
    })}
  </div>
}

export default StudentList
