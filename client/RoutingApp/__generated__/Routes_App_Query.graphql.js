/**
 * @flow
 * @relayHash 1771944ee244e2e0af3fc01905190a73
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Routes_App_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query Routes_App_Query {
  viewer {
    ...TodoApp_viewer
    id
  }
}

fragment TodoApp_viewer on User {
  id
  firstName
  lastName
  username
  email
  totalCount
  ...TodoList_viewer
  ...Footer_viewer
}

fragment TodoList_viewer on User {
  todos(first: 2147483647) {
    edges {
      node {
        __typename
        id
        timestamp
        ...Todo_todo
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  ...Todo_viewer
}

fragment Footer_viewer on User {
  id
  username
  email
}

fragment Todo_todo on Todo {
  timestamp
  id
  text
}

fragment Todo_viewer on User {
  id
  firstName
  lastName
  totalCount
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Routes_App_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Routes_App_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Routes_App_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "firstName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "username",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "email",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "concreteType": "TodoConnection",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "TodoEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "timestamp",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "text",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "todos{\"first\":2147483647}"
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "handle": "connection",
            "name": "todos",
            "key": "TodoList_todos",
            "filters": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Routes_App_Query {\n  viewer {\n    ...TodoApp_viewer\n    id\n  }\n}\n\nfragment TodoApp_viewer on User {\n  id\n  firstName\n  lastName\n  username\n  email\n  totalCount\n  ...TodoList_viewer\n  ...Footer_viewer\n}\n\nfragment TodoList_viewer on User {\n  todos(first: 2147483647) {\n    edges {\n      node {\n        __typename\n        id\n        timestamp\n        ...Todo_todo\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  ...Todo_viewer\n}\n\nfragment Footer_viewer on User {\n  id\n  username\n  email\n}\n\nfragment Todo_todo on Todo {\n  timestamp\n  id\n  text\n}\n\nfragment Todo_viewer on User {\n  id\n  firstName\n  lastName\n  totalCount\n}\n"
};

module.exports = batch;