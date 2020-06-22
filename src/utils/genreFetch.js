import { genreData } from "../genre";

const genreFetch = genres => {
  let strGenres = "";
  let count = 0;
  let name = {};

  if (genres === undefined) {
    return "";
  }

  for (let i = 0; i < genres.length; ++i) {
    name = genreData.state.filter(obj => {
      return obj.id === genres[i];
    });

    if (genres.length === 1) {
      strGenres = name[0].FriendlyName;
    } else if (i === 0) {
      strGenres += name[0].FriendlyName + ", ";
    } else if (i === genres.length - 1) {
      strGenres += " " + name[0].FriendlyName;
    } else {
      strGenres += " " + name[0].FriendlyName;
      count++;
    }
  }
  return strGenres;
};

export default genreFetch;
