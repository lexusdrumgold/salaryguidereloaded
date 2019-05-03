// Packages
import { h, Component, Fragment } from 'preact'
import ReactGA from 'react-ga'

// Components
import { Guide, Header, Hero, Footer } from './organisms'

// Style
import '../style/app.sass'

/**
 * @file Preact component representing the application.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the application.
 *
 * @class App
 * @exports App
 * @extends preact.Component
 */
export default class App extends Component {
  /**
   * Logs that the application has mounted.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    console.info('Application mounted.')
    ReactGA.initialize('UA-34401991-10')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  /**
   * Renders the application.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {Fragment}
   */
  render(props, state) {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Guide />
        <Footer />
      </Fragment>
    )
  }
}
