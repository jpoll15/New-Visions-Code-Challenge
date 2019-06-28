import React from 'react'
import studentData from '../students'
import StudentList from './StudentList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: studentData,
      percentageAbsenteeism: 0
    }
  }

  handleChange = event => {
    this.setState({percentageAbsenteeism: event.target.value})
  }

  render = () => {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="percentage absenteeism">
            Select the threshold of chronic absenteeism by percent of days missed:
            </label>
            <input name="percentage absenteeism" type="number" value={this.state.percentageAbsenteeism} min="0" max="100" onChange={this.handleChange}/>
          </form>
        </div>
        <StudentList students={this.state.students} percentageAbsenteeism={this.state.percentageAbsenteeism} />
      </div>
    )
  }
}

export default App
