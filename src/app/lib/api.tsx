const BASE_URL = 'http://localhost:3001'

export const getLibrary = async () => {
  const response = await fetch(`${BASE_URL}/data.json`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  return data
}
