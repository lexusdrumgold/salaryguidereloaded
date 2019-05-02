// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a form legend.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a form legend.
 *
 * @class Legend
 * @exports Legend
 * @extends preact.Component
 */
export default class Legend extends Component {
  /**
   * Renders a paragraph element.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLLegendElement}
   */
  render(props, state) {
    props.class = (`ada-legend ${props.class ? props.class : ''}`).trim()

    const { legend, id, children } = props

    const filtered_props = {
      dangerouslySetInnerHTML: legend ? { __html: legend } : undefined,
      class: props.class,
      id: id
    }

    return legend
      ? <legend {...filtered_props} />
      : <legend {...props} >{children}</legend>
  }
}
