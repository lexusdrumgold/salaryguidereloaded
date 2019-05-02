// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the loading view.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the loading view.
 *
 * @class Loading
 * @exports Loading
 * @extends Component
 */
export default class Loading extends Component {
  /**
   * Renders the loading view.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLDivElement} HTML div representing the loading view.
   */
  render(props, state, context) {
    let style = (`adm-loading ${props.class ? props.class : ''}`).trim()

    return (
      <div class={style}>
        <div className='ada-container'>
          <i class='far fa-spinner-third fa-spin ada-icon' />
        </div>
      </div>
    )
  }
}
