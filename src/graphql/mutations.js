/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      hostID
      opponentID
      turn
      result
      hostName
      opponentName
      hostColor
      opponentColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      hostID
      opponentID
      turn
      result
      hostName
      opponentName
      hostColor
      opponentColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      hostID
      opponentID
      turn
      result
      hostName
      opponentName
      hostColor
      opponentColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
