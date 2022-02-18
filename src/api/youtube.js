import axios from 'axios';


const KEY = 'AIzaSyBSfVyZAi8fRkxwRKtBhtJA99aeejof8hI';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: `${KEY}`
    }
});