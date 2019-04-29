// Packages
import { h, Component } from 'preact'

// Logo
import logo from '../../assets/dbk.svg'

// Components
import { Link } from '../atoms'

/**
 * @file Preact component representing the header.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the header.
 *
 * @class Header
 * @exports Header
 * @extends preact.Component
 */
export default class Header extends Component {
  /**
   * Renders the header.
   *
   * @param {object} props - Header properties
   * @param {object} state - Header state
   * @returns {HTMLElement} html header element
   */
  render(props, state) {
    let style = (`ado-header ${props.class ? props.class : ''}`).trim()

    return (
      <header class={style}>
        <div className='ada-container'>
          <Link id='logo' href='https://dbknews.com' target='_blank'>
            <img src={logo} alt='DBK Logo' />
          </Link>

          <nav>
            <Link href='#about'>About</Link>
            &nbsp; | &nbsp;
            <Link href='#explore'>Explore</Link>
          </nav>
        </div>
      </header>
    )
  }
}
