// Packages
import { h, Component } from 'preact'

// Components

/**
 * @file Preact component representing a fielset element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a fielset element.
 *
 * @class Fieldset
 * @exports Fieldset
 * @extends preact.Component
 */
export default class Fieldset extends Component {
  /**
   * Renders a fieldset element.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    let style = (`ada-fieldset ${props.class ? props.class : ''}`).trim()

    return (
      <fieldset class={style} id={props.id}>
        {props.children}
      </fieldset>
    )
  }
}
