// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a feather icon.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see {@link https://feathericons.com/}
 */

/**
 * Preact component representing a button.
 *
 * @class Icon
 * @exports Icon
 * @extends preact.Component
 */
export default class Icon extends Component {
  /**
   * Replaces the icon with the appropriate svg.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    window.feather.replace()
  }

  /**
   * Renders a button.
   *
   * @param {object} props - Button properties
   * @param {object} state - Button state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    props.class = (`ada-icon ${props.class ? props.class : ''}`).trim()

    let icon_name = props.name
    delete props.name

    return <i data-feather={icon_name} {...props} />
  }
}
