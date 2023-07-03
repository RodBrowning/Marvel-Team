import { addToCacheWithExpiration, getDataFromCache } from '../cache'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { MD5 } from 'crypto-js'

const axiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchData = async (url: string, params = {}): Promise<any> => {
  const stringParams = JSON.stringify(params)
  const chacheKey = `${url}:${stringParams}`

  // Return Cache  data
  const cachedData = await getDataFromCache(chacheKey)
  if (cachedData) return cachedData

  const privateKey = process.env.REACT_APP_PRIVATE_KEY
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const ts = new Date().getTime().toString()
  const md5Hash = MD5(`${ts}${privateKey}${publicKey}`).toString()
  const apiParams = {
    apikey: publicKey,
    ts,
    hash: md5Hash,
  }
  const headers = {
    Accept: '*/*',
  }

  try {
    const response: AxiosResponse = await axiosInstance.get(url, {
      params: { ...apiParams, ...params },
      headers,
    })

    // Cache the data
    const expirationTime = 3600 * 24 // 1 hora * 24
    await addToCacheWithExpiration(chacheKey, response.data, expirationTime)

    return response.data

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: AxiosError | any) {
    if (error.response) {
      console.error('Request failed with status code', error.response.status)
      console.error('Response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Error:', error.message)
    }
  }
}
