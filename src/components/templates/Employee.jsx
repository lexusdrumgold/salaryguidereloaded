// Packages
import { h, Component } from 'preact'

// Components
import { Paragraph } from '../atoms'

/**
 * @file Preact component representing a piece of employee data.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing a piece of employee data.
 *
 * @class Employee
 * @exports Employee
 * @extends preact.Component
 */
export default class Employee extends Component {
  /**
   * Renders a piece of employee data.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    let style = (`adt-employee ${props.class ? props.class : ''}`).trim()

    const { name, department, division, title, salary } = this.get_employee()

    return (
      <div class={style}>
        <div class='ada-container'>
          <div class='employee-overview'>
            <Paragraph class='employee-name'>
              {name}
            </Paragraph>
            <ul class='employee-details'>
              <li class='employee-detail employee-department'>{department}</li>
              <li class='employee-detail employee-division'>{division}</li>
              <li class='employee-detail employee-title'>{title}</li>
            </ul>
          </div>
          <Paragraph class='employee-salary'>
            {salary}
          </Paragraph>
        </div>
      </div>
    )
  }

  // Helpers
  get_employee = () => {
    const { Division, Department, Title, Employee, Salary } = this.props
    const department_arr = Department.toLowerCase().split('-')

    return {
      name: Employee,
      department: `${department_arr[0]} | ${department_arr[1]}`,
      division: Division.toLowerCase(),
      title: Title.toLowerCase(),
      salary: Salary.toLowerCase()
    }
  }
}
