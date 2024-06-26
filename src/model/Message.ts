export default interface MessageStructure {
  id: number;
  avatar: string;
  name: string;
  handle: string;
  time: string;
  text: string;
  like: boolean;
  likeCount: number;
  timeLike: string;
  bookmark: boolean;
  timeBookmark: string;
}