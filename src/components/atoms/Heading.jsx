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
    const { heading, size, children } = props
    props.class = (`ada-heading ${props.class ? props.class : ''}`).trim()

    let element
    let html_heading = { __html: heading }

    if (size === 2) {
      element = heading
        ? <h2 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h2 {...props} >{children}</h2>
    } else if (size === 3) {
      element = heading
        ? <h3 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h3 {...props} >{children}</h3>
    } else if (size === 4) {
      element = heading
        ? <h4 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h4 {...props} >{children}</h4>
    } else if (size === 5) {
      element = heading
        ? <h5 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h5 {...props} >{children}</h5>
    } else if (size === 6) {
      element = heading
        ? <h6 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h6 {...props} >{children}</h6>
    } else {
      element = heading
        ? <h1 dangerouslySetInnerHTML={html_heading} {...props} />
        : <h1 {...props} >{children}</h1>
    }

    return element
  }
}
