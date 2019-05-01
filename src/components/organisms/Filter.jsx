// Packages
import { h, Component } from 'preact'

// Configuration
import { FilterFormConfig } from '../../config/constants.config'

// Components
import { Fieldset, Label, Legend } from '../atoms'
import { Searchbar } from '../molecules'

// Utilities
import { request } from '../../utilities/global.utilities'

/**
 * @file Preact component representing the filter menu.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the filter menu.
 *
 * @class Filter
 * @exports Filter
 * @extends Component
 */
export default class Filter extends Component {
  state = {
    years: []
  }

  async componentDidMount() {
    console.info('Filter mounted.')

    try {
      console.group('Getting Salary Guide years...')

      // Get Salary Guide years
      const req = await request({ url: '/years', method: 'get' })

      console.info('Retreived Salary Guide years ->', req.data.data)

      this.setState({
        years: [
          {
            label: 'years',
            options: (req.data.data.map((year, i) => ({
              value: `/year/${year}`,
              text: year,
              selected: i === req.data.data.length - 1
            })))
          }
        ].concat(FilterFormConfig)
      })
    } catch (err) {
      console.error('Error getting Salary Guide years ->', err.message)
    }
  }

  /**
   * Renders the filter menu.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLFormElement}
   */
  render(props, state) {
    const style = (`ado-filter ${props.class ? props.class : ''}`).trim()
    
    return (
      <div class={style}>
        <Searchbar onChange={e => props.handle_params('search', e.target.value)} />
        <Legend legend='Filter' />
        <Fieldset>
          {
            state.years.length
              ? state.years.map((group, i) => {
                const { label, options } = group

                return (
                  <div className='filter-group'>
                    <Label label={label} />
                    <select label={label} onChange={i == 0 ? (e => props.handle_url(e.target.value)) : (e => props.handle_params(label, e.target.value))}>
                      {options.map(option => (
                        <option
                          {...option}
                        />
                      ))}
                    </select>
                  </div>
                )
              })
              : null
          }
        </Fieldset>
      </div >
    )
  }
}
