// Packages
import axios from 'axios'
import { BadRequest } from '@feathersjs/errors'

/**
 * @file Global utility functions
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 *
 */

/**
 * Makes a request to the DBK News API salary endpoint.
 *
 * @param {object} config - Axios Request Config
 * @returns {*} Requested data
 * @throws {BadRequest}
 * @see {@link https://github.com/axios/axios#request-config}
 * @see {@link https://github.com/axios/axios#response-schema}
 */
export const request = async config => {
  try {
    const Axios = axios.create({ baseURL: 'https://api.dbknews.com/salary' })

    const { data, status, statusText } = await Axios(config)

    return { data, status, statusText }
  } catch (err) {
    const { message, config, response } = err

    console.error(err.message, config)

    if (response) throw new BadRequest(message, response)
    throw new BadRequest('Request made, but no response was received.', config)
  }
}
