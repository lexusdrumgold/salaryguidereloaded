// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a link.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing a link.
 *
 * @class Link
 * @exports Link
 * @extends preact.Component
 */
export default class Link extends Component {
  /**
   * Renders a link.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    let style = (`ada-link ${props.class ? props.class : ''}`).trim()

    return (
      <a {...props} class={style}>
        {props.children}
      </a>
    )
  }
}
