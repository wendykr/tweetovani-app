export default interface Message {
  id: number;
  avatar: string;
  avatarAvif: string;
  avatarWebp: string;
  name: string;
  handle: string;
  time: string;
  text: string;
  like: boolean;
  likeCount: number;
  likedAt: string;
  bookmark: boolean;
  bookmarkedAt: string;
}
