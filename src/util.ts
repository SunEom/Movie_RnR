export const genresToArray = (genreString: string): Array<string> => {
  const genreArray = genreString.split(', ');
  return genreArray;
};

export const genresToString = (genres: Array<string>): string => {
  let _genres = '';
  for (let i = 0; i < genres.length; i++) {
    if (i + 1 === genres.length) {
      _genres += genres[i];
      break;
    }
    _genres += `${genres[i]}, `;
  }
  return _genres;
};

export const dateFormat = (date: string): string => {
  const formattedDate = date.substr(0, 10);
  return formattedDate;
};
