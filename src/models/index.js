// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GameResult = {
  "DRAW": "DRAW",
  "WON_WHITE": "WON_WHITE",
  "WON_BLACK": "WON_BLACK"
};

const { Game } = initSchema(schema);

export {
  Game,
  GameResult
};