export interface IGame {
  createdAt: string;
  deletedAt: string;
  endsAt: string;
  gameProgress: string;
  id: number;
  isFinished: boolean;
  isStarted: boolean;
  name: string;
  numberOfUsers: number;
  startsAt: string;
  state: string;
}

export interface ICard {
  description: string;
  image: string;
  name: string;
  rank: number;
}

export interface IGameDetailed extends IGame {
  cards: ICard[];
  users: {
    gameId: number;
    id: number;
    socketId: string;
    userId: number;
    cards: ICard[];
  }[];
}
