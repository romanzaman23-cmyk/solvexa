import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src =
  'C:/Users/roman/.cursor/projects/c-solvexa/assets/c__Users_roman_AppData_Roaming_Cursor_User_workspaceStorage_0e7da0c0481cae324a820a8ac3993cee_images_image-8ba9efad-dada-4985-b0e2-7a1ad9aca97b.png'
const out = path.join(__dirname, '..', 'public', 'solvexa-logo.png')

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info

for (let i = 0; i < data.length; i += channels) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const sum = r + g + b
  const dark = r < 32 && g < 38 && b < 48
  const softDark = sum < 95 && r < 55 && g < 60 && b < 70
  if (dark || softDark) data[i + 3] = 0
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(out)
console.log('Transparent logo saved:', out)
