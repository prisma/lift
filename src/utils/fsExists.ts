import { promises as fs } from 'fs'

export async function fsExists(filePath: string) {
  try {
    await fs.stat(filePath)
    return true
  } catch (e) {
    return false
  }
}
