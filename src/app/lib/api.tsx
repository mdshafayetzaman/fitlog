import { IType } from './types'

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
}

export const getLibrary = async (): Promise<IType[]> => {
  try {
    const response = await fetch(`${getBaseUrl()}/data.json`, {
      next: {
        revalidate: 15,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data: IType[] = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching library:', error)

    return []
  }
}
