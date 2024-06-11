export const declineCharacters = (count: number): string => {
  if (count === 0) {
    return 'znaků';
  } else if (count === 1 || count === -1) {
    return 'znak';
  } else if ((count >= 2 && count <= 4) || (count >= -2 && count <= -4)) {
    return 'znaky';
  } else {
    return 'znaků';
  }
};
