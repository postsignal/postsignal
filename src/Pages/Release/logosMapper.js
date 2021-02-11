export default function logosMapper(link) {
  const hostname = new URL(link).hostname.replace("www.", "");
  const mapping = {
    "open.spotify.com": "Spotify",
    "music.yandex.ru": "YandexMusic",
    "youtu.be": "YouTube",
    "deezer.page.link": "Deezer",
    "soundcloud.com": "SoundCloud",
    "postsignal.bandcamp.com": "Bandcamp",
    "vk.com": "VK",
    "music.apple.com": "AppleMusic",
  };
  return mapping[hostname];
}
