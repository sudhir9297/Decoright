export function CapitalizeSentence(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase())
}

export function getAllProductRecursion(obj) {
  let namedObjects = []

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      namedObjects = namedObjects.concat(getAllProductRecursion(obj[key]))
    } else if (key === 'name' && typeof obj === 'object') {
      namedObjects.push(obj)
      break
    }
  }

  return namedObjects
}
