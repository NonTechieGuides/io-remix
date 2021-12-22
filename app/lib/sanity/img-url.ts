import { config } from './config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(config)

export function urlFor(source) {
  return builder.image(source)
}