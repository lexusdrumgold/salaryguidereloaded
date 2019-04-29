// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a table row.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing a table row.
 *
 * @class TableRow
 * @exports TableRow
 * @extends preact.Component
 */
export default class TableRow extends Component {
  /**
   * Renders a table row.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    let style = (`ada-tr ${props.class ? props.class : ''}`).trim()

    return (
      <tr class={style}>
        {props.children}
      </tr>
    )
  }
}
