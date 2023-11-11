import { apiHost } from "./api.constants";

export async function getPlaylist() {
  const res = await fetch(`${apiHost}/catalog/track/all`);

  if (!res.ok) {
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");
  }

  const playlist = await res.json();

  return playlist;
}

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
