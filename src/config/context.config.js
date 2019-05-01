// Packages
import { createContext } from 'preact'

/**
 * @file Context configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see
 * {@link https://reactjs.org/docs/context.html#consuming-multiple-contexts}
 */

/**
 * @namsespace InitialAsyncState - Initial async request state
 * @property {object | null} data - Async data
 * @property {number} progress - Loading if value < 100
 * @exports InitialAsyncState
 */
const InitialAsyncState = { data: null, progress: 0 }

/**
 * @namsespace InitialFilterState - Initial filter form state
 * @property {string} url - Request url
 * @property {object} params - Query parameters
 * @property {string} params.search - String to search all results by
 * @property {string} params.sortby - Field to sort data by
 * @property {string} params.order - How to sort the data
 * @property {string} params.page - Page to start at
 * @exports InitialAsyncState
 */
const InitialFilterState = {
  url: '/2019',
  params: { search: null, sortby: 'salary', order: 'desc', page: '1' }
}

/**
 * @namsespace InitialUIState - Initial user interface state
 * @property {boolean} menu_open - True if menu is open, closed otherwise
 * @property {boolean} mobile - True if viewport <= 768px
 * @exports InitialUIState
 */
const InitialUIState = { menu_open: false, mobile: false }

const AsyncContext = createContext(InitialAsyncState)
const AsyncTableContext = createContext(InitialAsyncState)
const FilterContext = createContext(InitialFilterState)
const UIContext = createContext(InitialUIState)

export {
  AsyncContext, AsyncTableContext, FilterContext, InitialAsyncState, InitialFilterState, InitialUIState, UIContext
}
