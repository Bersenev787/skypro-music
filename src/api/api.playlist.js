import { apiHost } from "../services/api.constants";

export async function getTrack(id) {
  if (!id) {
    return;
  }

  const res = await fetch(`${apiHost}/catalog/track/${id}`);

  if (!res.ok) {
    throw new Error("Не удалось загрузить трек, попробуйте позже");
  }

  const track = await res.json();

  return track;
}
