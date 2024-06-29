export const declineCharacters = (count: number): string => {
  switch (true) {
    case count === 1 || count === -1:
      return 'znak';
    case (count >= 2 && count <= 4) || (count >= -4 && count <= -2):
      return 'znaky';
    default:
      return 'znaků';
  }
};
