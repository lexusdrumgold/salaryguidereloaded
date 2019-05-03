// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Logo
import logo from '../../assets/dbk.png'

// Components
import { Link } from '../atoms'
import { HeaderNavigation } from '../molecules'
import Filter from './Filter.jsx'


/**
 * @file Preact component representing the header.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the header.
 *
 * @class Header
 * @exports Header
 * @extends Component
 */
export default class Header extends Component {
  /**
   * Attaches a scroll listener to the window when the component mounts.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    $(window).scroll(() => this.handle_window_scroll())
  }

  /**
   * Component cleanup.
   */
  componentWillUnmount() {
    // Remove scroll window listener
    $(window).off('scroll')
  }

  /**
   * Renders the header.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    return (
      <header class={(`ado-header ${props.class ? props.class : ''}`).trim()}>
        <div className='ada-container'>
          <Link id='logo' onClick={e => this.handle_link('body', e)}>
            <img src={logo} alt='DBK Logo' />
          </Link>

          <HeaderNavigation onClick={this.handle_link} />
        </div>
      </header>
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
    $('html, body').animate({ scrollTop: $(selector).offset().top - 50 }, 1000)
    $('.ado-filter').removeClass('ui-sticky').css({ top: 0 })

    event.preventDefault()
  }

  /**
   * When the top of the hero is out of the viewport, the header will have the
   * class ui-sticky added to. Otherwise, ui-sticky will be removed.
   *
   * @returns {undefined}
   */
  handle_window_scroll = () => {
    if ($(window).scrollTop() === 0) {
      $('.ado-header').removeClass('ui-sticky')
    } else if ($(window).scrollTop() > ($('.ado-hero').outerHeight() - 200)) {
      $('.ado-header').addClass('ui-sticky')
    }
  }
}
