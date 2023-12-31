import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum GameResult {
  DRAW = "DRAW",
  WON_WHITE = "WON_WHITE",
  WON_BLACK = "WON_BLACK"
}



type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostID: string;
  readonly opponentID?: string | null;
  readonly turn?: string | null;
  readonly result?: GameResult | keyof typeof GameResult | null;
  readonly hostName?: string | null;
  readonly opponentName?: string | null;
  readonly hostColor?: string | null;
  readonly opponentColor?: string | null;
  readonly board?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostID: string;
  readonly opponentID?: string | null;
  readonly turn?: string | null;
  readonly result?: GameResult | keyof typeof GameResult | null;
  readonly hostName?: string | null;
  readonly opponentName?: string | null;
  readonly hostColor?: string | null;
  readonly opponentColor?: string | null;
  readonly board?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}