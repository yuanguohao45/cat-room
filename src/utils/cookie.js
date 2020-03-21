import Cookies from 'js-cookie'

export function getCookies(params) {
  return Cookies.get(params) || ''
}

export function setCookies(memberNo, openid, token) {
  Cookies.set('memberNo', memberNo)
  Cookies.set('openid', openid)
  Cookies.set('token', token)
}
