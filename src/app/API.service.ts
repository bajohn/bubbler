/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateRestaurantInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  city?: string | null;
  neighborhood?: string | null;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  neighborhood?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
  neighborhood?: string | null;
};

export type DeleteRestaurantInput = {
  id?: string | null;
};

export type CreateCircleInput = {
  id?: string | null;
  x?: number | null;
  y?: number | null;
};

export type ModelCircleConditionInput = {
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  and?: Array<ModelCircleConditionInput | null> | null;
  or?: Array<ModelCircleConditionInput | null> | null;
  not?: ModelCircleConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCircleInput = {
  id: string;
  x?: number | null;
  y?: number | null;
};

export type DeleteCircleInput = {
  id?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  neighborhood?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCircleFilterInput = {
  id?: ModelIDInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  and?: Array<ModelCircleFilterInput | null> | null;
  or?: Array<ModelCircleFilterInput | null> | null;
  not?: ModelCircleFilterInput | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCircleMutation = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCircleMutation = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCircleMutation = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string | null;
    name: string | null;
    description: string | null;
    city: string | null;
    neighborhood: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCircleQuery = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCirclesQuery = {
  __typename: "ModelCircleConnection";
  items: Array<{
    __typename: "Circle";
    id: string | null;
    x: number | null;
    y: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string | null;
  name: string | null;
  description: string | null;
  city: string | null;
  neighborhood: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCircleSubscription = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCircleSubscription = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCircleSubscription = {
  __typename: "Circle";
  id: string | null;
  x: number | null;
  y: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateCircle(
    input: CreateCircleInput,
    condition?: ModelCircleConditionInput
  ): Promise<CreateCircleMutation> {
    const statement = `mutation CreateCircle($input: CreateCircleInput!, $condition: ModelCircleConditionInput) {
        createCircle(input: $input, condition: $condition) {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCircleMutation>response.data.createCircle;
  }
  async UpdateCircle(
    input: UpdateCircleInput,
    condition?: ModelCircleConditionInput
  ): Promise<UpdateCircleMutation> {
    const statement = `mutation UpdateCircle($input: UpdateCircleInput!, $condition: ModelCircleConditionInput) {
        updateCircle(input: $input, condition: $condition) {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCircleMutation>response.data.updateCircle;
  }
  async DeleteCircle(
    input: DeleteCircleInput,
    condition?: ModelCircleConditionInput
  ): Promise<DeleteCircleMutation> {
    const statement = `mutation DeleteCircle($input: DeleteCircleInput!, $condition: ModelCircleConditionInput) {
        deleteCircle(input: $input, condition: $condition) {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCircleMutation>response.data.deleteCircle;
  }
  async Bubblerhandler(msg?: string): Promise<string | null> {
    const statement = `query Bubblerhandler($msg: String) {
        bubblerhandler(msg: $msg)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (msg) {
      gqlAPIServiceArguments.msg = msg;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.bubblerhandler;
  }
  async Echo(msg?: string): Promise<string | null> {
    const statement = `query Echo($msg: String) {
        echo(msg: $msg)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (msg) {
      gqlAPIServiceArguments.msg = msg;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.echo;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            neighborhood
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetCircle(id: string): Promise<GetCircleQuery> {
    const statement = `query GetCircle($id: ID!) {
        getCircle(id: $id) {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCircleQuery>response.data.getCircle;
  }
  async ListCircles(
    filter?: ModelCircleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCirclesQuery> {
    const statement = `query ListCircles($filter: ModelCircleFilterInput, $limit: Int, $nextToken: String) {
        listCircles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            x
            y
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCirclesQuery>response.data.listCircles;
  }
  OnCreateRestaurantListener: Observable<
    OnCreateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRestaurantSubscription>;

  OnUpdateRestaurantListener: Observable<
    OnUpdateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRestaurantSubscription>;

  OnDeleteRestaurantListener: Observable<
    OnDeleteRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          description
          city
          neighborhood
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRestaurantSubscription>;

  OnCreateCircleListener: Observable<OnCreateCircleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCircle {
        onCreateCircle {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCircleSubscription>;

  OnUpdateCircleListener: Observable<OnUpdateCircleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCircle {
        onUpdateCircle {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCircleSubscription>;

  OnDeleteCircleListener: Observable<OnDeleteCircleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCircle {
        onDeleteCircle {
          __typename
          id
          x
          y
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCircleSubscription>;
}
