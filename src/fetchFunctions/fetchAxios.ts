import axios, { AxiosError, AxiosResponse } from 'axios'

import { MD5 } from 'crypto-js'

const axiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchData = async (url: string, params = {}): Promise<any> => {
  const privateKey = '9566eda4a32c6af79023be9a8bba520bd017a999'
  const publicKey = '758cac0842d019abcf2860b4aac04e10'
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