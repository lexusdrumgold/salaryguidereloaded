// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the footer.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the footer.
 *
 * @class Footer
 * @exports Footer
 * @extends preact.Component
 */
export default class Footer extends Component {
  /**
   * Renders the footer.
   *
   * @param {object} props - Footer properties
   * @param {object} state - Footer state
   * @returns {HTMLElement} html footer element
   */
  render(props, state) {
    let style = (`ado-footer ${props.class ? props.class : ''}`).trim()

    return (
      <footer class={style}>
        <div className='ada-container'>
          {/* TODO */}
        </div>
      </footer>
    )
  }
}
