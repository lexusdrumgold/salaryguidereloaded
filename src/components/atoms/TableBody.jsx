// Packages
import { h, Component } from 'preact'

// Configuration
import { AsyncTableContext } from '../../config/context.config'

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
    let style = (`ada-tbody ${props.class ? props.class : ''}`).trim()

    return (
      <tbody class={style}>
        <AsyncTableContext.Consumer>
          {
            ({ loading }) => {
              if (loading) return null

              return props.children
            }
          }
        </AsyncTableContext.Consumer>
      </tbody>
    )
  }
}
