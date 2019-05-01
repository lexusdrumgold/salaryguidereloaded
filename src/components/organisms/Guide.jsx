// Packages
import { h, Component } from 'preact'
// import $ from 'jquery'

// Configuration
import { FilterContext } from '../../config/context.config'

// Components
import Filter from './Filter.jsx'

import { Heading, Paragraph } from '../atoms'
import { Employee } from '../templates'

// Utility functions
import { request } from '../../utilities/global.utilities'

/**
 * @file Preact component representing the table section.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the salary table section.
 *
 * @class Guide
 * @exports Guide
 * @extends preact.Component
 */
export default class Guide extends Component {
  /**
   * @namsespace state - Guide component state
   * @property {object | null} data - Async data
   * @property {number} data.count - Number of employee objects
   * @property {object[]} data.employees - Array of employee objects
   * @property {number} loading - Data progress value. Data loading if < 100
   * @property {object} params - Query parameters
   * @property {string} params.search - String to search all results by
   * @property {string} params.sortby - Field to sort data by
   * @property {string} params.order - How to sort the data
   * @property {string} params.page - Page to start at
   * @property {string} url - Request url
   * @property {object[]} years - Years dropdown filter options
   */
  state = {
    data: { employees: [], count: 0 },
    loading: true,
    params: {
      search: '', sortby: 'salary', order: 'desc', page: '1'
    },
    url: '/year/2019',
    years: []
  }

  /**
   * Requests the years endpoint and gets the last requested batch of data.
   *
   * @async
   * @returns {undefined}
   */
  async componentDidMount() {
    console.info('Guide section mounted.')

    try {
      console.group('Getting Salary Guide table options...')

      // Get table data based on current state
      this.get_data()
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }

  componentDidCatch(err, info) {
    console.error(err.message, { err: err, info: info })
  }

  /**
   * Renders the guide section.
   *
   * @param {object} props - Guide properties
   * @param {object} state - Guide state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    return (
      <FilterContext.Provider value={state}>
        <section class='ado-guide' id='explore'>
          <div className='ada-container'>
            <div className='guide-header'>
              <Heading size={3} >
                Search the Diamondback Salary Guide
              </Heading>
              <Paragraph>
                At The Diamondback, we’ve pledged to hold the University of Maryland accountable in our coverage. Our annual salary guide adheres to that mission, laying out each university employee’s yearly pay in an easily digestible format.
                <br /><br />
                Get started by filtering by <span>salary, job title, department, and more.</span>
              </Paragraph>

              <Filter
                guide={state}
                handle_params={this.handle_params}
                handle_url={this.handle_url}
              />
            </div>
            <div className='guide-contents'>
              {
                state.data.employees.length
                  ? state.data.employees.map(employee =>
                    <Employee {...employee} />
                  )
                  : null
              }
            </div>
          </div>
        </section>
      </FilterContext.Provider>

    )
  }

  // Helpers

  get_data = async () => {
    try {
      console.group('Getting Salary Guide data...')

      // Get table data based on current state
      const { url, params } = this.state
      let req = await request({ url: url, params: params, method: 'get' })

      console.info('Retreived Salary Guide data ->', req.data)
      const { count, data } = req.data
      this.setState({
        data: { count, employees: data },
        loading: false,
        page: 1,
        page_limit: Math.ceil(count / 10)
      })
    } catch (err) {
      console.error('Error getting Salary Guide data ->', err.message)
    }
  }

  // ! FIXME: Supposed to update Guide state, but doesn't seem to do anything
  // Gets passed to the Filter component
  handle_params = (type, value) => {
    console.info('Handling search parameter change:', { type, value })

    let params_copy = Object.assign({}, this.state.params)
    params_copy[type] = value

    this.setState(state => ({ ...state, params: params_copy }))
  }

  // ! FIXME: Supposed to update Guide state, but doesn't seem to do anything
  // Gets passed to the Filter component
  handle_url = url => {
    console.info('Handling url parameter change:', url)
    this.setState(state => ({ url: url }))
  }
}
