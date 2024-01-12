/* 
 [{
    "ts": "2023-12-09T17:18:00.000Z",
    "master_metadata_album_artist_name": "Machine Gun Kelly",
    "master_metadata_track_name": "twin flame",
    "ms_played": 172013
  }],
*/

// create a json file with the above format,
// but should have 3000 entries separated by 6 minutes on the ts field

const fs = require("fs");
const path = require("path");

const data = require("./data.json");

const newData = [];

const start = new Date("2023-12-14T17:12:00.000Z").getTime();
const end =
  new Date("2023-12-14T17:12:00.000Z").getTime() + 3000 * 6 * 60 * 1000;

const diff = end - start;
const step = diff / 3000;

for (let i = 0; i < 3000; i++) {
  newData.push({
    ...data[0],
    ts: new Date(start - i * step).toISOString(),
  });
}

fs.writeFileSync(
  path.join(__dirname, "data2.json"),
  JSON.stringify(newData, null, 2)
);

console.log("done");
