const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
}

export const getLibrary = async () => {
  try {
    const response = await fetch(`${getBaseUrl()}/data.json`, {
      next: {
        revalidate: 15,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching library:', error)
    return []
  }
}
