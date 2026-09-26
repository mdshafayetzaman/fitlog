export const getLibrary = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/data.json`,
      {
        next: {
          revalidate: 15,
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching library:', error)
    throw new Error('Failed to fetch library data')
  }
}
