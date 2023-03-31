import { Dog } from "../features/dogs/dogs";

export const dogsApiUrl =
    "https://api.api-ninjas.com/v1/dogs?name=a"

export const defaultImage =
    "https://img.freepik.com/premium-vector/cute-french-bulldog-dog-logo_1051-3344.jpg";

export const fetchDogs = async () => {
    let dogs: Dog[] = [];
    for (let i = 0; i < 10; i++) {
        let temp_dogs: Dog[] = [];

        temp_dogs = await fetch(dogsApiUrl + "&offset=" + i * 20, {
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': 'Gu6NoWltz8NPrmpDpnrW5Q==U1XhyUgEEPskJc1Y',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type, Authorization'

            },
        })
            .then((res) => res.json())
            .then((json) => json as Dog[])
            .then((articles) => {
                articles.forEach((a) => {
                    a.is_visible = true;
                    if (a.barking < 5 && a.energy > 4) {
                        a.description = "This is a cool dog, that doesn't bark much, but a very energetic dog";
                    }
                    else {
                        a.description = "This is a talkative dog, that barks a lot but a non-energetic dog"
                    }
                    console.log(a)
                    a.isFavorite = false
                });
                return articles;
            });
        for (const dog of temp_dogs) {
            dogs.push(dog)
        }
    }
    return dogs;
}