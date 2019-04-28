// Packages
import { h, Component } from 'preact'

// Components
import Icon from './Icon.jsx'

/**
 * @file Preact components representing different buttons.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a button.
 *
 * @class Button
 * @exports Button
 * @extends preact.Component
 */
export default class Button extends Component {
  /**
   * Renders a button.
   *
   * @param {object} props - Button properties
   * @param {object} state - Button state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    props.class = (`ada-button ${props.class ? props.class : ''}`).trim()

    let children = props.children
    delete props.children

    return <button {...props}>{children}</button>
  }
}

/**
 * Preact component representing a close button.
 *
 * @class CloseButton
 * @exports CloseButton
 * @extends preact.Component
 */
export class CloseButton extends Component {
  /**
   * Renders a button.
   *
   * @param {object} props - CloseButton properties
   * @param {object} state - CloseButton state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    return (
      <Button id='btn-close' class={props.class} onClick={props.onClick}>
        <Icon name='x' />
      </Button>
    )
  }
}
