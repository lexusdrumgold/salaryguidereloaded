// Packages
import { h, Component, Fragment } from 'preact'

// Configuration
import { AsyncContext } from '../config/context.config.js'

// Components
import { Progress } from './atoms'
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
   * @namespace state - Application state
   * @property {object | null} data - Async data
   * @property {Error | null} error - Current error
   * @property {number} progress - Loading if value < 100
   * @instance
   */
  state = { data: null, error: null, progress: 0 }

  /**
   * Starts the progress interval and requests the site's CMS data.
   *
   * @returns {undefined}
   */
  async componentDidMount() {
    console.info('Application mounted.')

    // Start progress bar
    this.handle_progress_interval()

    this.handle_loading()
    this.handle_progress_interval(false)
  }

  /**
   * Clears the progress bar interval.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    this.handle_progress_interval(false)
  }

  /**
   * Renders the application into div#app.
   *
   * @param {object} props - Application properties
   * @param {object} state - Application state
   * @returns {HTMLMainElement} the application wrapped in a main tag
   */
  render(props, state) {
    return (
      <Fragment>
        <AsyncContext.Provider value={state}>
          <Progress />
        </AsyncContext.Provider>
        <Header />
        <Hero />
        <Guide />
        <Footer />
      </Fragment>
    )
  }

  // Helpers

  /**
   * Updates the component loading and progress state.
   * Loading defaults to false.
   *
   * @param {boolean} loading - True if loading, false otherwise
   * @returns {undefined}
   */
  handle_loading = (loading = false) => {
    this.setState(state => ({ progress: loading ? state.progress + 1 : 100 }))
  }

  /**
   * Starts the progress interval. Start defaults to true.
   *
   * @param {boolean} start - If true, start progress interval. Clear otherwise
   * @returns {undefined}
   */
  handle_progress_interval = (start = true) => {
    if (start) {
      this.progress = setInterval(this.handle_loading(start), 1100)
    } else {
      clearInterval(this.progress)
    }
  }
}
