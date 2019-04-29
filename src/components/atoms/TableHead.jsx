// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a table header.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing a table header.
 *
 * @class TableHead
 * @exports TableHead
 * @extends preact.Component
 */
export default class TableHead extends Component {
  /**
   * Renders a table header.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    let style = (`ada-thead ${props.class ? props.class : ''}`).trim()

    return (
      <thead class={style}>
        {props.children}
      </thead>
    )
  }
}
