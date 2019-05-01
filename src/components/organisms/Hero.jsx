// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Icon, Link } from '../atoms'

/**
 * @file Preact component representing the hero section.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// TODO: Add Social Navigation

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
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML section element representing the hero section
   */
  render(props, state) {
    return (
      <section class={(`ado-hero ${props.class ? props.class : ''}`).trim()}>
        <div class='ada-container'>
          <div className='hero-text'>
            {['The Diamondback', 'Salary Guide'].map(heading => {
              return <Heading class='ui-text-special'>{heading}</Heading>
            })}

            <Link id='link-explore' href='#explore'>
              Explore <Icon class='ui-accent-light' name='chevron-down' />
            </Link>
          </div>

          {/* TODO: Add Social Navigation */}
        </div>
      </section>
    )
  }
}
