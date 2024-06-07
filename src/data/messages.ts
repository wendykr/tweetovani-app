import MessageStructure from "../model/message";

export const messages: MessageStructure[] = [
  {
    id: 1,
    avatar: '../avatars/woman1.jpg',
    name: 'Alena Nováková',
    handle: '@novalena',
    time: '2h',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum temporibus sit nemo, impedit maxime ipsum numquam laboriosam accusamus eius.',
    like: 43,
    bookmark: false,
  },
  {
    id: 2,
    avatar: '../avatars/woman2.jpg',
    name: 'Jana Novotná',
    handle: '@janicka',
    time: '1d',
    text: 'Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis incidunt voluptas nemo esse saepe cum repellendus.',
    like: 323,
    bookmark: true,
  },
  {
    id: 3,
    avatar: '../avatars/woman3.jpg',
    name: 'Lenka Skočdopole',
    handle: '@fieldhop',
    time: '1d',
    text: 'Voluptas dolorem quis beatae doloribus nobis eligendi aperiam. Voluptates, deleniti eaque dolore, vitae consequatur, aspernatur reiciendis odio necessitatibus at natus labore.',
    like: 2,
    bookmark: false,
  }
]