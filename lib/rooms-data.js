const rooms = [
    {
        id: '1',
        name: 'Living Room',
        date: '28/10/2023',
        cards: cards,
        //Lista de ids?
        players: [
            '28cbe3a2b0b551c89e642ecdfe8aa30e',
            '27cd45c383752fc6bff21b9361860d97',
            'e4c7b772785a9d02c4f9db4eea46f1fc',
            'e33c9f5a3badc3a439bb5b97b43caeea',
            '8221328358032dcf6869281458489420'
        ]
    }
];

const cards = [
    {
        id: '1',
        title: 'First Card',
        description: 'Card Description 1',
        roomId: rooms[0].id
    },
    {
        id: '2',
        title: 'Second Card',
        description: 'Card Description 2',
        roomId: rooms[0].id
    },
    {
        id: '3',
        title: 'Third Card',
        description: 'Card Description 3',
        roomId: rooms[0].id
    },
    {
        id: '4',
        title: 'Fourth Card',
        description: 'Card Description 4',
        roomId: rooms[0].id
    },
]