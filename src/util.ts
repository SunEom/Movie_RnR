export const genre = {
  genresToArray: (genreString: string): Array<string> => {
    return [];
  },

  genresToString: (genres: Array<string>): string => {
    let _genres = '';
    for (let i = 0; i < genres.length; i++) {
      if (i + 1 === genres.length) {
        _genres += genres[i];
        break;
      }
      _genres += `${genres[i]}, `;
    }
    return _genres;
  },
};
