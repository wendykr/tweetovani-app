import Message from '../types/Message';

export const getSortedMessages = (
  data: Message[],
  value: keyof Pick<Message, 'time' | 'bookmarkedAt' | 'likedAt'>
): Message[] => {
  return data.sort(
    (a, b) => new Date(b[value]).getTime() - new Date(a[value]).getTime()
  );
};
