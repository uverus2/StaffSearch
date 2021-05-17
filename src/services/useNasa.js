import { useState, useEffect } from "react";
import axios from "axios";

//Images
import Hero from 'Public/images/background.jpg';

export default function useNasa() {
    //POD - Picture of the day
    const [pod, setPod] = useState({});

    useEffect(() => {
        // Self invoking function because I will need this code only once
        (async () => {
            let pictureObject = {
                title: "Search Staff",
                url: Hero,
                subTitle: "The best search platform out there."
            }

            try {
                const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=3`,
                      response = await axios.get(`${url}`);

                if(response?.data){
                    const findImage = response.data.find(i => i.media_type = "image");

                    if(findImage){
                        pictureObject.title = findImage.title;
                        pictureObject.url = findImage.url;
                        pictureObject.subTitle = "https://apod.nasa.gov";
                    }
                }

                setPod(pictureObject);

            } catch (e) {
                console.log(e);
                setPod(pictureObject);
            }

        })();
    }, []);

    return { pod }
}