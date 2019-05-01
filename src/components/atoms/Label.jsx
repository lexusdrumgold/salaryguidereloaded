// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a form label.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a form label.
 *
 * @class Label
 * @exports Label
 * @extends Component
 */
export default class Label extends Component {
  /**
   * Renders a form label.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLLabelElement}
   */
  render(props, state) {
    props.class = (`ada-label ${props.class ? props.class : ''}`).trim()

    const { label, id } = props

    const label_props = {
      dangerouslySetInnerHTML: { __html: label },
      class: props.class,
      id: id
    }

    return <label {...label_props} />
  }
}
