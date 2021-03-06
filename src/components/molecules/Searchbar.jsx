// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Components
import { Input } from '../atoms'

/**
 * @file Preact component representing a searchbar.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a searchbar.
 *
 * @class Searchbar
 * @exports Searchbar
 * @extends preact.Component
 */
export default class Searchbar extends Component {
  /**
   * Renders a searchbar.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLDivElement} HTML div element representing a searchbar
   */

  render(props, state) {
    let style = (`adm-searchbar ${props.class ? props.class : ''}`).trim()

    const input_props = {
      // onChange: this.search,
      // onInput: props.onChange,
      placeholder: 'Search the salary guide database',
      id: 'search-box'
    }

    return (
      <div class={style}>
        <div class='ada-container'>
          <i class='fas fa-search ada-icon' onClick={this.props.searchFunc} /> <Input input={input_props} />
        </div>
      </div>
    )
  }
}
