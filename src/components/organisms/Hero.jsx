// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Components
import { Heading, Icon, Link } from '../atoms'

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

            <Link
              id='link-explore'
              href='#guide'
              onClick={e => this.handle_link('#guide', e)}
            >
              Explore <Icon class='ui-accent-light' name='chevron-down' />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Helpers

  /**
   * Smooth scrolls to an element.
   *
   * @param {string} selector - Element selector string
   * @param {event} Event - onClick event
   * @returns {undefined}
   */
  handle_link = (selector, event) => {
    $('html, body').animate({ scrollTop: $(selector).offset().top - 50 }, 500)
    $('.ado-filter').removeClass('ui-sticky').css({ top: 0 })

    event.preventDefault()
  }
}
