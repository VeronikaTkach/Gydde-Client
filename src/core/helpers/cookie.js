export function getCookie(name) {
  const cookieName = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return '';
}

export function setCookie(name, value, daysToExpire) {
  const hours = 24;
  const min = 60;
  const sec = 60;
  const ms = 1000;

  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * hours * min * sec * ms);

  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires;
}
