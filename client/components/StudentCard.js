import React from 'react'

function StudentCard(props) {
  const {
    firstName,
    lastName,
    schoolName,
    absencePercentage,
    guidanceCounselor,
    guidanceCounselorEmail,
    homePhoneNumber,
    status,
  } = props

  return <div>
    <p><strong>{lastName}, {firstName}</strong></p>
    <p><small>Status: {status}</small></p>
    <p><small>School: {schoolName}</small></p>
    <p><small>School days missed: {absencePercentage.toFixed(2)}%</small></p>
    <p><small>Guidance counselor name, e-mail: {guidanceCounselor}, {guidanceCounselorEmail}</small></p>
    <p><small>Home phone number: {homePhoneNumber}</small></p>
  </div>
}

export default StudentCard
