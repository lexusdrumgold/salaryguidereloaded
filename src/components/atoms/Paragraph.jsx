// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing a paragraph element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a paragraph element.
 *
 * @class Paragraph
 * @exports Paragraph
 * @extends preact.Component
 */
export default class Paragraph extends Component {
  /**
   * Renders a paragraph element.
   *
   * @param {object} props - Paragraph properties
   * @param {object} state - Paragraph state
   * @returns {preact.Link}
   */
  render(props, state) {
    const { paragraph, children } = props
    props.class = (`ada-paragraph ${props.class ? props.class : ''}`).trim()

    return paragraph
      ? <p dangerouslySetInnerHTML={{ __html: paragraph }} {...props} />
      : <p {...props}>{children}</p>
  }
}
