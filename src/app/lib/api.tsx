import fs from 'fs'
import path from 'path'

export const getLibrary = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json')

  const jsonData = fs.readFileSync(filePath, 'utf-8')

  const data = JSON.parse(jsonData)

  return data
}
