// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a table body.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing a table body.
 *
 * @class TableBody
 * @exports TableBody
 * @extends preact.Component
 */
export default class TableBody extends Component {
  /**
   * Renders a table body.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    return (
      <tbody class={(`ada-tbody ${props.class ? props.class : ''}`).trim()}>
        {props.children}
      </tbody>
    )
  }
}
