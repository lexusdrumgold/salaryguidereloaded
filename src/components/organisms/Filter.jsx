// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

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

    $(window).resize(() => this.handle_window_scroll())
    $(window).scroll(() => this.handle_window_scroll())

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
   * Component cleanup.
   */
  componentWillUnmount() {
    // Remove scroll window listener
    $(window).off('resize')
    $(window).off('scroll')
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
        <div class='ada-container'>
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
                      <select
                        label={label}
                        onChange={
                          i === 0
                            ? e => props.handle_url(e.target.value)
                            : e => props.handle_params(label, e.target.value)
                        }>
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
        </div>
      </div>
    )
  }

  // Helpers

  /**
   * When the filter menu is at the top of the viewport, the the filter menu
   * will have the class ui-sticky added to. Otherwise, ui-sticky will be
   * removed.
   *
   * @returns {undefined}
   */
  handle_window_scroll = () => {
    const get_height = selector => $(selector).outerHeight()

    const filter = $('.ado-filter')
    const distance = get_height('.ado-hero') + get_height('.guide-header') + 65

    const has_class = filter.hasClass('ui-sticky')

    if (!has_class && $(window).scrollTop() >= distance) {
      filter.css({ top: $('.ado-header').height() }).addClass('ui-sticky')
    } else if (has_class && $(window).scrollTop() < distance) {
      filter.css({ top: 0 }).removeClass('ui-sticky')
    }
  }
}
