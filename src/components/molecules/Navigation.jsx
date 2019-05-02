// Packages
import { h, Component, Fragment } from 'preact'
import $ from 'jquery'

// Components
import { Icon, Link } from '../atoms'

/**
 * @file Preact component representing the footer navigation.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the header navigation.
 *
 * @class HeaderNavigation
 * @exports HeaderNavigation
 * @extends Component
 */
export class HeaderNavigation extends Component {
  state = {
    links: [
      {
        href: '#about',
        text: 'About'
      },
      {
        href: '#guide',
        text: 'Explore'
      }
    ]
  }

  /**
   * Renders the header navigation.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html navigation element
   */
  render(props, state, context) {
    return (
      <nav class='adm-header-navigation'>
        {state.links.map((link, i) => {
          const { href } = link
          if (i === 1) {
            return <Link {...link} onClick={e => props.onClick(href, e)} />
          }

          return (
            <Fragment>
              <Link {...link} onClick={e => props.onClick(href, e)} />
              &nbsp;|&nbsp;
            </Fragment>
          )
        })}
      </nav>
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
    $('html, body').animate({ scrollTop: $(selector).offset().top - 50 }, 1250)
    $('.ado-filter').removeClass('ui-sticky').css({ top: 0 })

    event.preventDefault()
  }
}

/**
 * Preact component representing the footer navigation.
 *
 * @class FooterNavigation
 * @exports FooterNavigation
 * @extends Component
 */
export class FooterNavigation extends Component {
  state = {
    links: [
      {
        href: 'https://dbknews.com',
        text: 'dbknews',
        target: '_blank'
      },
      {
        href: 'https://twitter.com/thedbk',
        text: 'twitter',
        target: '_blank'
      },
      {
        href: 'https://www.facebook.com/TheDiamondback/',
        text: 'facebook',
        target: '_blank'
      }
    ]
  }

  /**
   * Renders the footer navigation.
   *
   * @param {object} props - FooterNavigation properties
   * @param {object} state - FooterNavigation state
   * @returns {HTMLElement} html navigation element
   */
  render(props, state, context) {
    return (
      <nav class='adm-footer-navigation'>
        {state.links.map((link, i) => {
          if (i === state.links.length - 1) return <Link {...link} />

          return (
            <Fragment>
              <Link {...link} />&nbsp;|&nbsp;
            </Fragment>
          )
        })}
      </nav>
    )
  }
}

/**
 * Class representing the social navigation.
 *
 * @class Navigation
 * @exports Navigation
 * @extends Component
 */
export class SocialNavigation extends Component {
  /**
   * Renders the social navigation.
   *
   * @param {object} props - SocialNavigation properties
   * @param {object} state - SocialNavigation state
   * @returns {HTMLElement} html navigation element
   */
  render(props, state, context) {
    let style = 'adm-social-navigation'
    style = (`${style} ${props.class ? props.class : ''}`).trim()

    const icons = ['link', 'globe', 'twitter', 'facebook']

    return (
      <nav class={style}>
        <div className='ada-container'>
          {icons.map(icon => <Icon name={icon} height='30' width='30' />)}
        </div>
      </nav>
    )
  }
}
