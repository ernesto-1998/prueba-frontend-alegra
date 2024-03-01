let regexInteger = /^-?\d+$/
const validateInteger = (value) => {
  return regexInteger.test(value)
}

export default validateInteger
