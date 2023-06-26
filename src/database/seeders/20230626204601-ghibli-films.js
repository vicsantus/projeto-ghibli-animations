'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('films', [
      {
        title: 'Nausicaä of the Valley of the Wind',
        description: 'Faced with the destruction of her planet\'s natural resources, warrior princess Nausicaa mobilizes her people against the violent army of an evil queen.',
        image: 'http://localhost:3001/images/nausicaa.jpg'
      },
      {
        title: 'Castle in the Sky',
        description: 'Young orphan Sheeta and her kidnapper Colonel Muska are flying to a military prison when their aircraft is attacked by a gang of air pirates led by Dola.',
        image: 'http://localhost:3001/images/castle-in-the-sky.jpg'
      },
      {
        title: 'My Neighhor Totoro',
        description: 'Two girls move to the countryside of Japan to care for their sick mother and befriend the magical creatures that inhabit the outskirts of their new home.',
        image: 'http://localhost:3001/images/my-heighbor-totoro.jpg'
      },
      {
        title: 'Grave of the Fireflies',
        description: 'Siblings Setsuko and Seita live in Japan during World War II. After their mother\'s death in a bombing and their father\'s call to war, they move in with some relatives. Dissatisfied, they leave the city and end up in a shelter in the woods.',
        image: 'http://localhost:3001/images/grave-of-the-fireflies.jpg'
      },
      {
        title: 'Kiki\'s Delivery Serice',
        description: 'On her mother\'s orders, Kiki leaves for a year-long apprenticeship, accompanied by her black cat. At the command of her magic broom, she ends up in the charming little town of Moreoastal.',
        image: 'http://localhost:3001/images/kikis.jpg'
      },
      {
        title: 'Only Yesterday',
        description: 'Taeko is a single woman who dedicates herself only to work. She leaves her native Tokyo for the first time and travels to Yamagata to visit her sister\'s family during the annual turmeric harvest.',
        image: 'http://localhost:3001/images/only-yesterday.jpg'
      },
      {
        title: 'Porco Rosso: The Last Romantic Hero',
        description: 'Sky pirates decide to terrorize the Adriatic Sea and only a brave pilot, half man and half pig, has the necessary courage to face them.',
        image: 'http://localhost:3001/images/porco-rosso.jpg'
      },
      {
        title: 'Ocean Waves',
        description: 'College student Taku recalls the arrival of student Rikako two years ago and the fateful summer that put his friendship with Yutaka to the test.',
        image: 'http://localhost:3001/images/ocean-waves.jpg'
      },
      {
        title: 'PomPoko: The Great Battle of the Raccoons',
        description: 'Real estate developments are driving wild raccoons out of Tama Hills. But they are preparing to fight back!',
        image: 'http://localhost:3001/images/pom-poko.jpg'
      },
      {
        title: 'Whisper of the Heart',
        description: 'Student Shizuku discovers that all the books she borrows from the library have already been checked out by someone named Seiji. Now, she wants to find him.',
        image: 'http://localhost:3001/images/whisper-of-the-heart.jpg'
      },
      {
        title: 'Princess Mononoke',
        description: 'A prince suffers from a deadly curse and sets out to find a cure. He ends up in the middle of a battle between a mining town and the animals of the forest.',
        image: 'http://localhost:3001/images/princess-mononoke.jpg'
      },
      {
        title: 'Spirited Away',
        description: 'Chihiro and her parents are moving to a different city. On the way to the new house, the father decides to take a shortcut. They come across a table laden with food, although no one is around. Chihiro senses danger, but his parents start eating.',
        image: 'http://localhost:3001/images/spirited-away.jpg'
      },
      {
        title: 'The Cat Returns',
        description: 'Haru saves a cat that was about to be run over by a truck and discovers that he is, in fact, a prince. Out of gratitude the King of Cats asks her to marry him, and the girl is taken to the Kingdom of Cats. Now, she wants her freedom.',
        image: 'http://localhost:3001/images/the-cat-returns.jpg'
      },
      {
        title: 'Howl\'s Moving Castle',
        description: 'Young Sophie works in her late father\'s hat shop in a drab town. But things take a turn for the worse after a spell transforms her into an elderly woman.',
        image: 'http://localhost:3001/images/howls-moving-castle.jpg'
      },
      {
        title: 'Tales from Earhsea',
        description: 'An arch sorcerer leads a troubled and dark prince on a journey to discover the source of the evil that inhabits him and save the woman they love.',
        image: 'http://localhost:3001/images/tales-from-earthsea.jpg'
      },
      {
        title: 'Ponyo - A Friendship That Came From the Sea',
        description: 'A 5-year-old boy named Sosuke befriends a goldfish princess named Ponyo, who desperately wants to become a human.',
        image: 'http://localhost:3001/images/ponyo.jpg'
      },
      {
        title: 'The Secret World of Arrietty',
        description: 'Tiny Arriety befriends a big, big boy. Now she has to protect her tiny family from his huge relatives.',
        image: 'http://localhost:3001/images/the-secret-world-of-arrietty.jpg'
      },
      {
        title: 'From up on Poppy Hill',
        description: 'Two students try to stop an old wartime club from being destroyed during preparations for the 1964 Tokyo Olympics.',
        image: 'http://localhost:3001/images/from-up-on-poppy-hill.jpg'
      },
      {
        title: 'The Wind Rises',
        description: 'Jiro Horikoshi is a young man who lives in a town in the countryside of Japan. He dreams of flying in a bird-shaped plane. From that dream, Jiro decides that building a plane the way he wants it and putting it in the air is his life\'s goal.',
        image: 'http://localhost:3001/images/the-wind-rises.jpg'
      },
      {
        title: 'The Tale of the Princess Kaguya',
        description: 'Kaguya was a baby who was found inside a glowing bamboo trunk. After time, she turns into a beautiful young woman who becomes coveted by five nobles, including the emperor himself.',
        image: 'http://localhost:3001/images/the-tale-of-the-princess-kaguya.jpg'
      },
      {
        title: 'Whe Marnie was there',
        description: 'While spending the holidays in a city where nothing happens, Anna befriends a girl who lives in a deserted house. But is the bond between them real?',
        image: 'http://localhost:3001/images/when-marnie-was-there.jpg'
      },
      {
        title: 'Earwig and the Witch',
        description: 'A stubborn and courageous orphan is adopted by a witch and becomes her apprentice in the magical arts.',
        image: 'http://localhost:3001/images/earwing-and-the-witch.jpg'
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('films', null, {})
  }
}