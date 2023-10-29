export async function getPlaylist() {
  const res = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all"
  );

  if (!res.ok) {
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");
  }

  const playlist = await res.json();

  return playlist;
}
