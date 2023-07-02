export const truncateString = (str: string, maxLength: number, truncationIndicator = '...') => {
  if (str.length <= maxLength) {
    return str
  }

  return str.slice(0, maxLength - truncationIndicator.length) + truncationIndicator
}
