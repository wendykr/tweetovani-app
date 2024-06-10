import MessageStructure from "../model/Message";

export const messages: MessageStructure[] = [
  {
    id: 1,
    avatar: '../avatars/woman1.jpg',
    name: 'Alena Nováková',
    handle: '@novalena',
    time: '2024-05-20 18:00:00',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum temporibus sit nemo, impedit maxime ipsum numquam laboriosam accusamus eius.',
    like: 43,
    timeLike: '2024-05-20 18:50:00',
    bookmark: false,
    timeBookmark: '0000-00-00 00:00:00',
  },
  {
    id: 2,
    avatar: '../avatars/woman2.jpg',
    name: 'Jana Novotná',
    handle: '@janicka',
    time: '2024-06-09 06:05:00',
    text: 'Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis incidunt voluptas nemo esse saepe cum repellendus.',
    like: 13,
    timeLike: '2024-06-09 18:00:00',
    bookmark: true,
    timeBookmark: '2024-05-20 18:00:00',
  },
  {
    id: 3,
    avatar: '../avatars/woman3.jpg',
    name: 'Lenka Skočdopole',
    handle: '@fieldhop',
    time: '2024-01-20 18:00:00',
    text: 'Voluptas dolorem quis beatae doloribus nobis eligendi aperiam. Voluptates, deleniti eaque dolore, vitae consequatur, aspernatur reiciendis odio necessitatibus at natus labore.',
    like: 2,
    timeLike: '2024-05-20 14:00:00',
    bookmark: false,
    timeBookmark: '0000-00-00 00:00:00',
  }
]