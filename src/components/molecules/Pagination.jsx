// Packages
import { h, Component } from 'preact'

// Components
import { BackButton, NextButton, Paragraph } from '../atoms'

/**
 * @file Preact component representing the salary guide pagination.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing the salary guide pagination.
 *
 * @class Pagination
 * @exports Pagination
 * @extends Component
 */
export default class Pagination extends Component {
  /**
   * Renders the salary guide pagination.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLDivElement}
   */
  render(props, state, context) {
    const { current_page, handle_button, page_limit } = props

    return (
      props.page_limit
        ? (
          <div class={(`adm-pagination ${props.class ? props.class : ''}`).trim()}>
            <BackButton
              class={current_page === '1' ? 'ui-disabled' : ''}
              onClick={() => handle_button('back')}
            />
            <Paragraph class='page-count'>
              <span>{`${current_page}`}</span>
              &nbsp;/&nbsp;{`${page_limit}`}
            </Paragraph>
            <NextButton
              class={current_page === `${page_limit}` ? 'ui-disabled' : ''}
              onClick={() => handle_button()}
            />
          </div>
        )
        : null
    )
  }
}
