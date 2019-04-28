// Packages
import { h, Component } from 'preact'

/**
 * @file Preact component representing the hero section.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the hero section.
 *
 * @class Hero
 * @exports Hero
 * @extends preact.Component
 */
export default class Hero extends Component {
  /**
   * Renders the hero section.
   *
   * @param {object} props - Hero properties
   * @param {object} state - Hero state
   * @returns {HTMLElement} html section element
   */
  render(props, state) {
    let style = (`ado-hero ${props.class ? props.class : ''}`).trim()

    return (
      <div class={style}>
        <div class='ada-container'>
          {/* TODO */}
        </div>
      </div>
    )
  }
}
