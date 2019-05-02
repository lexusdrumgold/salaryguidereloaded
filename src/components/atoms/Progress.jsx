// Packages
import { h, Component, createRef } from 'preact'

// Configuration
import { AsyncContext } from '../../config/context.config.js'

/**
 * @file Preact component representing the progress bar.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Class representing the progress bar.
 *
 * @class Progress
 * @exports Progress
 * @extends preact.Component
 */
export default class Progress extends Component {
  /**
   * Progress bar container reference.
   *
   * @type {RefObject<any>}
   * @instance
   */
  progress = createRef()

  /**
   * Progress value reference.
   *
   * @type {RefObject<any>}
   * @instance
   */
  progress_value = createRef()

  /**
   * Renders a progress bar.
   *
   * @param {object} props - Progress properties
   * @param {object} state - Progress state
   * @returns {AsyncContext.Consumer} Progress bar that consumes async context
   */
  render(props, state) {
    const style = (`ada-progress ${props.class ? props.class : ''}`).trim()

    return (
      <AsyncContext.Consumer>
        {
          ({ progress }) => {
            if (progress === 100) setTimeout(this.handle_progress, 1250)

            return (
              <div ref={this.progress} class={style}>
                <div
                  ref={this.progress_value}
                  class='progress-value' style={{ width: `${progress}%` }}
                />
              </div>
            )
          }
        }
      </AsyncContext.Consumer>
    )
  }

  // Helpers

  /**
   * Handles the progress bar user interface.
   *
   * @returns {undefined}
   */
  handle_progress = () => {
    const add_hide = ref => ref.current.classList.add('ui-hide')

    add_hide(this.progress)
    add_hide(this.progress_value)
  }
}
