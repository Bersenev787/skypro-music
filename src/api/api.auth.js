import { apiHost } from "./api.constants";

export async function register(formData) {
  const res = await fetch(`${apiHost}/user/signup/`, {
    method: "POST",
    body: JSON.stringify({
      ...formData,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => json);

  if (!res.ok) {
    throw Error(JSON.stringify(res));
  }

  return res;
}

export async function login(formData) {
  const res = await fetch(`${apiHost}/user/login/`, {
    method: "POST",
    body: JSON.stringify({
      ...formData,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => json);

  if (!res.ok) {
    throw Error(JSON.stringify(res));
  }

  return res;
}
