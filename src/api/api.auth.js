import { apiHost } from "./api.constants";

export async function register(formData) {
  //   console.log(JSON.stringify(formData));
  //   const res = await fetch(`${apiHost}/user/signup`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).catch((error) => {
  //     throw Error(error);
  //   });

  //   if (!res.ok) {
  //     throw Error(res.statusText);
  //   }

  //   return res;
  await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
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
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("error", error);
      throw Error(error);
    });
}
