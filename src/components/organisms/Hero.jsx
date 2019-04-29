// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Icon, Link, Paragraph } from '../atoms'
import { SocialNavigation } from '../molecules'

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
          <div className='hero-text'>
            <Heading heading='The Diamondback' class='ui-text-special' />
            <Heading heading='Salary Guide' class='ui-text-special' />
            <Link id='link-explore' href='#explore'>
              Explore <Icon class='ui-accent-light' name='chevron-down' />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
