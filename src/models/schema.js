export const schema = {
    "models": {
        "Game": {
            "name": "Game",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hostID": {
                    "name": "hostID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "opponentID": {
                    "name": "opponentID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "turn": {
                    "name": "turn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "result": {
                    "name": "result",
                    "isArray": false,
                    "type": {
                        "enum": "GameResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hostName": {
                    "name": "hostName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "opponentName": {
                    "name": "opponentName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostColor": {
                    "name": "hostColor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "opponentColor": {
                    "name": "opponentColor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "board": {
                    "name": "board",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Games",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "read",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "GameResult": {
            "name": "GameResult",
            "values": [
                "DRAW",
                "WON_WHITE",
                "WON_BLACK"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "fb9ae5e585e5c34248d482ffb6229e28"
};