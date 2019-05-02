// Packages
import { h, Component } from 'preact'
import { Icon } from '.'

// Components

/**
 * @file Preact component representing an input field.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see {@link https://feathericons.com/}
 */

/**
 * Preact component representing an input field.
 *
 * @class Input
 * @exports Input
 * @extends preact.Component
 */
export default class Input extends Component {
  /**
   * Renders an input field.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    let style = (`ada-input ${props.class ? props.class : ''}`).trim()

    const { icon, input } = props

    return (
      <div class={style}>
        {icon ? <Icon name={icon} /> : null} <input {...input} />
      </div>
    )
  }
}
