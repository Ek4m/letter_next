export interface CreateGameDto {
  name: string;
}

export interface JoinGameDto {
  gameId: number;
  userId: number;
}
