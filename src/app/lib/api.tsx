export const getLibrary = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data.json`,
    {
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  return data
}
