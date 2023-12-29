const crypto = require('crypto')

export function generateGravatarUrl(email, size) {
  email = email.trim().toLowerCase()
  const hash = crypto.createHash('md5').update(email).digest('hex')

  return `https://www.gravatar.com/avatar/${hash}?s=${size}`
}
