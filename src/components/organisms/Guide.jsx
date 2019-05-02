// Packages
import { h, Component, Fragment } from 'preact'
import $ from 'jquery'

// Components
import Filter from './Filter.jsx'

import { Heading, Paragraph } from '../atoms'
import { Loading, Pagination } from '../molecules'
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
   */
  state = {
    data: { count: 0, employees: [] },
    loading: true,
    params: {
      search: '', sortby: 'salary', order: 'desc', page: '1'
    },
    url: '/year/2019'
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
      // ! Get table data based on current state
      this.get_data()
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }

  componentDidCatch(err, info) {
    console.error(err.message, info)
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
      <section class='ado-guide' id='guide'>
        <div class='ada-container'>
          <div class='guide-header'>
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
              current_page={state.params.page}
              page_limit={state.page_limit}
              handle_button={this.handle_button}
              count={state.data.count}
            />
          </div>
          <div class='guide-contents'>
            {
              state.loading
                ? <Loading />
                : <Fragment>
                  {
                    state.data.employees.length
                      ? state.data.employees.map(employee =>
                        <Employee {...employee} />
                      )
                      : null
                  }
                </Fragment>
            }
          </div>
          <Pagination
            current_page={state.params.page}
            page_limit={state.page_limit}
            handle_button={this.handle_button}
          />
        </div>
      </section>
    )
  }

  // Helpers

  get_data = async () => {
    this.setState({ loading: true })

    try {
      console.group('Getting Salary Guide data...')

      // Get table data based on current state
      const { url, params } = this.state
      let req = await request({ url: url, params: params, method: 'get' })

      console.info('Retreived Salary Guide data ->', req.data)

      const { count, data } = req.data

      setTimeout(() => {
        this.setState(state => ({
          data: { count, employees: data },
          loading: false,
          params: params,
          page_limit: params.search === ''
            ? Math.ceil(count / 10) : Math.ceil(req.data.data.length / 10),
          url: url
        }))
      }, 1500)

      console.groupEnd()
    } catch (err) {
      console.error('Error getting Salary Guide data ->', err.message)
    }
  }

  handle_button = (type = 'next') => {
    const { page_limit, params } = this.state

    let key

    if (type === 'next') {
      const limit = `${page_limit}`
      key = params.page === limit ? limit : `${parseInt(params.page) + 1}`
    } else {
      key = params.page === '1' ? '1' : `${parseInt(params.page) - 1}`
    }

    const selectors = $('html, body')
    selectors.animate({
      scrollTop: $('.ado-filter').offset().top - 200
    }, 500)

    this.handle_params('page', key)
  }

  /**
   * Handles changes to the search parameters.
   *
   * @param {string} type - Parameter type. search | sortby | order | page
   * @param {string} value - Parameter value
   * @returns {undefined}
   */
  handle_params = (type, value) => {
    console.info('Handling search parameter change:', { type, value })

    type = type.replace(/\s/g, '')

    let params_copy = Object.assign({}, this.state.params)
    params_copy[type] = value

    this.setState(
      state => ({ ...state, loading: true, params: params_copy }),
      () => this.get_data()
    )
  }

  /**
   * Handles changes to the request url.
   *
   * @param {string} url - New request url. /2014 - /<current_year>
   * @returns {undefined}
   */
  handle_url = url => {
    console.info('Handling url parameter change:', url)
    this.setState(
      state => ({ ...state, loading: true, url: url }),
      () => this.get_data()
    )
  }
}
