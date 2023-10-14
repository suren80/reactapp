// Contact unsplash API

import axios from "axios";

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 0HHcufCkpH7QqgrDRxOIQGbmwvw3nV3w9o2LyYttOOE'
        },
        params:{
            query: searchTerm
        }
    });

    //console.log(response);

    return response.data.results;
};

export default searchImages;