export default interface Message {
  id: number;
  avatar: string;
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
