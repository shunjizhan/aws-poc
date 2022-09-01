import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

// Stack extends Construct
// 
export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution env
      code: lambda.Code.fromAsset('lambda'),  // code loaded from root/lambda folder that we just created
      handler: 'hello.handler',               // filename: hello, function: handler
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello,
    });
  }
}
