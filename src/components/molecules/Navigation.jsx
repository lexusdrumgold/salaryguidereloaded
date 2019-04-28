// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the navigation.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the navigation.
 *
 * @class Navigation
 * @exports Navigation
 * @extends preact.Component
 */
export default class Navigation extends Component {
  /**
   * Renders the navigation.
   *
   * @param {object} props - Header properties
   * @param {object} state - Header state
   * @returns {HTMLElement} html navigation element
   */
  render(props, state, context) {
    let style = (`adm-navigation ${props.class ? props.class : ''}`).trim()

    return (
      <nav class={style}>
        {/* TODO */}
      </nav>
    )
  }
}
