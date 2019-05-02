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
 * @extends Component
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
    props.disabled = props.disabled ? 'disabled' : undefined

    let children = props.children
    delete props.children

    return <button {...props}>{children}</button>
  }
}

/**
 * Preact component representing a back button.
 *
 * @class BackButton
 * @exports BackButton
 * @extends Component
 */
export class BackButton extends Component {
  /**
   * Renders a back button.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    return (
      <Button
        disabled={props.disabled}
        id={props.id ? props.id : 'btn-back'}
        class={props.class}
        onClick={props.onClick}
      >
        <i class='fas fa-chevron-left ada-icon' />
      </Button>
    )
  }
}

/**
 * Preact component representing a close button.
 *
 * @class CloseButton
 * @exports CloseButton
 * @extends Component
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

/**
 * Preact component representing a filter button.
 *
 * @class FilterButton
 * @exports FilterButton
 * @extends Component
 */
export class FilterButton extends Component {
  /**
   * Renders a filter button.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    return (
      <Button id='btn-filter' class={props.class} onClick={props.onClick}>
        <Icon name='filter' />
      </Button>
    )
  }
}

/**
 * Preact component representing a back button.
 *
 * @class NextButton
 * @exports NextButton
 * @extends Component
 */
export class NextButton extends Component {
  /**
   * Renders a next button.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    return (
      <Button
        disabled={props.disabled}
        id={props.id ? props.id : 'btn-next'}
        class={props.class}
        onClick={props.onClick}
      >
        <i class='fas fa-chevron-right ada-icon' />
      </Button>
    )
  }
}
