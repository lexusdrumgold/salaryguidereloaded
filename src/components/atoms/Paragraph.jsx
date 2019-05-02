// Packages
import { h, Component, createRef } from 'preact'

// Configuration
import { AsyncContext } from '../../config/context.config'

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
   * Paragraph reference.
   *
   * @type {RefObject<any>}
   * @instance
   */
  paragraph = createRef()

  /**
   * Renders a paragraph element.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLParagraphElement}
   */
  render(props, state) {
    const style = (`ada-paragraph ${props.class ? props.class : ''}`).trim()
    const { id, children } = props

    return <p ref={this.paragraph} id={id} class={style}>{children}</p>
  }

  /**
   * Loading progress handler.
   *
   * @returns {undefined} Progress value
   */
  handle_progress = () => this.paragraph.current.classList.remove('ui-loading')
}
