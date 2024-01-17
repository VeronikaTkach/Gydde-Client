export function collectSearchParams(paramsObj) {
  const params = new URLSearchParams();

  for (const key in paramsObj) {
    params.append(key, paramsObj[key]);
  }

  return params;
}
