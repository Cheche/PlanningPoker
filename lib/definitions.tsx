export type Card = {
    id: string;
    name: string;
    description: string;
    roomId: string;
};

export type Room = {
    id: string;
    name: string;
    date: string;
    cards: Card[];
    players: string[];
};
