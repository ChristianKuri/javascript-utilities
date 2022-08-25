export function chunk(array: any[], n: number) {
  return Array.from(Array(Math.ceil(array.length / n)), (_, i) => array.slice(i * n, i * n + n))
}

export function filterAndRemove(arr: any[], searchKeys: string[]) {
  return arr.filter(
    (obj) =>
      !Object.keys(obj).some((key) => {
        return searchKeys.filter((searchKey) => obj[key].includes(searchKey)).length
      })
  )
}
