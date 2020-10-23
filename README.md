# Bubbler

Connect Lambda to amplify:

- In CLI, add function via `amplify add function`
- In CLI, push via `amplify push`
- In `amplify/backend/api/<name>/schema.graphql`, add a handler like 
```
type Query {
  bubblerhandler(msg: String): String
}
```
- In AWS Console -> AppSync -> Data Sources, create a Data Source with the Lambda just created. Use "Create new role" in this flow.
- In AWS Console -> AppSync -> Schema, find the resolver as defined in `schema.graphql`. In this example it would be under Query->bubblerhandler
- Click `Attach`
- Select the data source just created
- Leave mapping templates unselected
- Save resolver
- Back in the front-end code, the handler should be available via:
```
    const thisworks = await this.api.Bubblerhandler('test');

```
- Done!  