// Packages
import { h, Component } from 'preact'
import { BadRequest } from '@feathersjs/errors'

// Configuration
import { AsyncTableContext } from '../../config/context.config'

// Components
import Table from './Table.jsx'

import { Heading, Paragraph, TableBody, TableHead, TableRow } from '../atoms'
import { Employee } from '../templates'

// Utility functions
import { request } from '../../utilities/global.utilities'

/**
 * @file Preact component representing the guide section.
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
   * @namespace state - Guide state
   * @property {object} config - Default request config
   * @property {object | null} data - Async data
   * @property {Error | null} error - Current error
   * @property {number} loading - True if loading
   * @instance
   */
  state = {
    config: {
      url: '/2019',
      params: { sortby: 'salary', order: 'desc', page: '1' }
    },
    data: [],
    error: null,
    loading: true
  }

  async componentDidMount() {
    console.info('Guide section mounted.')

    try {
      const data = await this.get_data(this.state.config)
      setTimeout(() => this.setState({ data: data, loading: false }), 1000)
    } catch (err) {
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
    let style = (`ado-guide ${props.class ? props.class : ''}`).trim()

    return (
      <section class={style}>
        <div className='ada-container'>
          {/* Table */}
          <Table>
            <AsyncTableContext.Provider value={state}>
              <TableHead>
                <Heading size={3} heading='Search the Diamondback Salary Guide' />
                <Paragraph>
                  At The Diamondback, we’ve pledged to hold the University of Maryland accountable in our coverage. Our annual salary guide adheres to that mission, laying out each university employee’s yearly pay in an easily digestible format. Get started by filtering by <span>salary, job title, department, and more.</span>
                </Paragraph>

                {/* TODO: Add searchbar filter menu */}
              </TableHead>
              <TableBody>
                {
                  state.data.map((employee, index) => {
                    return (
                      <TableRow>
                        <Employee {...employee} />
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </AsyncTableContext.Provider>
          </Table>
          {/* Ads */}
        </div>
      </section>
    )
  }

  // Helpers

  get_data = async config => {
    console.group('Getting Salary Guide data...')

    const { NODE_ENV } = process.env
    console.info('Node environment:', NODE_ENV)

    try {
      const req = await request(config)

      console.info('Retreived Salary Guide data ->', req)
      return req.data
    } catch (err) {
      throw new BadRequest(`Error getting data -> ${err.message}`)
    } finally {
      console.groupEnd()
    }
  }
}
