export default class Services {
  async getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?query=morning&client_id="Your Api Key"';
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
  }
}
