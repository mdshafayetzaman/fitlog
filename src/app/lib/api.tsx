export const getLibrary = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data
}
