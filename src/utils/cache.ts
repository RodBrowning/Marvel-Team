export const addToCacheWithExpiration = async (key: string, data: any, expirationTime: number) => {
  try {
    const cache = await caches.open('marvel-cache')

    const cacheOptions = {
      headers: {
        'Cache-Control': `max-age=${expirationTime}`,
      },
    }

    const response = new Response(JSON.stringify(data), cacheOptions)
    await cache.put(key, response)
  } catch (error) {
    console.error('Error saving data in cache:', error)
  }
}

export const getDataFromCache = async (key: string): Promise<any | undefined> => {
  try {
    const cache = await caches.open('marvel-cache')
    const response = await cache.match(key)

    if (response) {
      const data = await response.json()
      return data
    } else {
      return undefined
    }
  } catch (error) {
    console.error('Error retrieving data from cache:', error)
    return undefined
  }
}
