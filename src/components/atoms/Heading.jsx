// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a heading element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a heading element.
 *
 * @class Heading
 * @exports Heading
 * @extends preact.Component
 */
export default class Heading extends Component {
  /**
   * Renders a heading element.
   *
   * @param {object} props - Heading properties
   * @param {object} state - Heading state
   * @returns {preact.Link}
   */
  render(props, state) {
    const style = (`ada-heading ${props.class ? props.class : ''}`).trim()
    const { id, size, children } = props

    let element

    if (size === 2) {
      element = <h2 class={style} id={id} >{children}</h2>
    } else if (size === 3) {
      element = <h3 class={style} id={id} >{children}</h3>
    } else if (size === 4) {
      element = <h4 class={style} id={id} >{children}</h4>
    } else if (size === 5) {
      element = <h5 class={style} id={id} >{children}</h5>
    } else if (size === 6) {
      element = <h6 class={style} id={id} >{children}</h6>
    } else {
      element = <h1 class={style} id={id} >{children}</h1>
    }

    return element
  }
}
