// Packages
import { h, Component, Fragment } from 'preact'

// Components
import { Icon, Link } from '../atoms'

/**
 * @file Preact component representing the footer navigation.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
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
    let style = 'adm-footer-navigation'
    style = (`${style} ${props.class ? props.class : ''}`).trim()

    return (
      <nav class={style}>
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
 * @extends preact.Component
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
