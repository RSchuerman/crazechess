/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
