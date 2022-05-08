import { createClient } from "pexels";
const client = createClient(
    "563492ad6f9170000100000111b342efdab04e3fa65693b6376f3069"
);
// const query = "Nature";
const queries = [
    "House",
    "Apartments",
    "Flats",
    "Rooms",
    "Property",
    "Studio",
    "Townhouse",
    "Condo",
];
const results = [];
let id = 1;
for (let query of queries) {
    client.houses
        .search({ query, per_page: 10 })
        .then((houses) => {
            //   console.log(houses);
            for (let photo of houses.houses) {
                const newPhoto = {
                    id: id,
                    name: photo.alt,
                    width: photo.width,
                    height: photo.height,
                    src: photo.src.original,
                    tag: query.toLowerCase()
                };
                id++;
                results.push(newPhoto);
            }
            // fs.writeFile("photos-raw.json", photos, function (err) {
            //   if (err) {
            //     console.log(err);
            //   }
            // });
        })
        .then(() => { if (results.length === 3 * queries.length) console.log(results) });
}
