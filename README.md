# Hello CDK

The `cdk.json` file tells the CDK Toolkit how to execute the app.

## Useful commands
- `yarn build`   compile typescript to js
- `yarn watch`   watch for changes and compile
- `yarn test`    perform the jest unit tests
- `cdk ls`       list the stacks in the app
- `cdk deploy`   deploy this stack to your default AWS account/region
- `cdk diff`     compare deployed stack with current state
- `cdk synth`    emits the synthesized CloudFormation template

## Notes
- AWS CDK default is to retain the bucket when the stack is deleted, while AWS CloudFormation's default is to delete it