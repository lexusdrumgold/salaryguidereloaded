// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the link.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the link.
 *
 * @class Link
 * @exports Link
 * @extends preact.Component
 */
export default class Link extends Component {
  /**
   * Renders the hero section.
   *
   * @param {object} props - Hero properties
   * @param {object} state - Hero state
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
