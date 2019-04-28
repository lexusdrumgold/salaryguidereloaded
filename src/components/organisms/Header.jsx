// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the header.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the header.
 *
 * @class Header
 * @exports Header
 * @extends preact.Component
 */
export default class Header extends Component {
  /**
   * Renders the header.
   *
   * @param {object} props - Header properties
   * @param {object} state - Header state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    let style = (`ado-header ${props.class ? props.class : ''}`).trim()

    return (
      <header class={style}>
        <div className='ada-container'>
          {/* TODO */}
        </div>
      </header>
    )
  }
}
