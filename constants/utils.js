export function CapitalizeSentence(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase())
}

export function getItems(ProductList, category) {
  if (category) {
    return ProductList[category] || {}
  }

  const allItems = {}
  for (const cat in ProductList) {
    for (const item in ProductList[cat]) {
      allItems[item] = ProductList[cat][item]
    }
  }
  return allItems
}

export function getProductRecursively(productList, productKey) {
  for (const key in productList) {
    if (productList[key][productKey]) {
      return productList[key][productKey]
    }
    if (
      typeof productList[key] === 'object' &&
      !Array.isArray(productList[key])
    ) {
      const result = getProductRecursively(productList[key], productKey)
      if (result) {
        return result
      }
    }
  }
  return null
}
