// Packages
import { Component } from 'preact'
import { route } from 'preact-router'

/**
 * @file Preact component representing a redirect.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a redirect.
 *
 * @class Redirect
 * @extends preact.Component
 * @exports Redirect
 * @see {@link https://www.npmjs.com/package/preact-router#redirects}
 */
export default class Redirect extends Component {
  /**
   * Redirects from this.props.path to this.props.to.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    const { path, to } = this.props

    console.info(`Redirecting from ${path} to ${to}...`)
    route(to, true)
  }

  /**
   * Renders null to properly perform the redirect.
   *
   * @param {object} props - Redirect properties
   * @param {object} state - Redirect state
   * @returns {null}
   */
  render(props, state) {
    return null
  }
}
