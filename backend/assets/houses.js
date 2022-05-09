import { createClient } from "pexels";
const client = createClient(
    "563492ad6f917000010000011cb1124603f04ea5b135ddc5d01c3158"
);
// const query = "Nature";
const queries = [
    "Animal",
    "Forest",
    "Ocean",
    "Plant",
    "Floral",
    "Succulent",
    "Mountain",
    "Fish"
];
const results = [];
let id = 1;
for (let query of queries) {
    client.photos
        .search({ query, per_page: 3 })
        .then((photos) => {
            //   console.log(photos);
            for (let photo of photos.photos) {
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
