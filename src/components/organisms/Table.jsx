// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a table.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

export default class Table extends Component {
  /**
   * Renders a table.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    let style = (`ado-table ${props.class ? props.class : ''}`).trim()

    return (
      <table class={style}>
        {props.children}
      </table>
    )
  }
}
