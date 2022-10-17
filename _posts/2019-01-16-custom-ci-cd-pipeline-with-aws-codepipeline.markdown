---
layout: post
title:  "Custom CI/CD pipeline with AWS CodePipeline"
---
Amazon Web Services offers a suite of products for handling continuous integration and continuous delivery workflows.
AWS CodeCommit, CodeBuild and CodeDeploy are glued together by CodePipeline, a tool that allows you to define a
pipeline that automatically starts when a change happens in a repository.

Usually, 3 steps are performed.

- The source step, that is triggered when a new commit is pushed to a particular branch of a specific **CodeCommit**
repository. In this step the new version of the source code is retrieved and passed over to the next step.
- The build step, which usually performs static code validation and creates an artifact ready to be deployed. **CodeBuild**
is the tool you can use on AWS to implement such step. The output artifact is passed over to the next step.
- The deploy step, which receives the artifacts to deploy and perform deploy operations. AWS offers **CodeDeploy**, a
tool you can use for defining automatic deploying processes and policies. It integrates very well with a limited set
of AWS services, like AWS Lambda and EC2.

There are **some limitations** with AWS CodeDeploy. What if the application you have to deploy does not run on AWS
Lambda nor EC2? For instance, you might have a website hosted on an S3 bucket and you want your deploy step to replace
the bucket content with the new version of the website. You can’t do that with CodeDeploy.

For achieving the desired result you can define a separate CodeBuild project that handles the deployment task.
A CodeBuild project is just a **Docker container** which is spawn when the project runs and executes an instruction
file in project.

I have written a CloudFormation template which creates a CodePipeline for the particular cases where the deployment
step falls outside the scope of CodeDeploy, where the user wants to perform some custom deployment operations.

Features

- Supports two environments named staging and production.
- Custom deployment process which actually runs in CodeBuild.
- Manual approval before starting the production build.

Here is an example of the pipeline the stack will generate:

<img src="/articles/3/aws-code-pipeline.png" class="img-fluid mb-3" alt="AWS Code Pipeline">

The CodeCommit repository must exist prior the CloudFormation stack is created since the repository name is one of the
input parameters.

The other two parameters are the two Docker images you want to use for the build and deploy steps.

<img src="/articles/3/cloud-formation.png" class="img-fluid mb-3" alt="AWS Cloud Formation">

The **IAM role** which is generated for both CodeBuild projects has minimum permissions. If you need to extend it, you
can either manually update the template or create another stack with an extra
[IAM Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html) for the role.

By default the pipeline stack will export the IAM Role ARN and name:

<img src="/articles/3/cloud-formation-stack.png" class="img-fluid mb-3" alt="AWS Cloud Formation">

That's it. You can find the template and related instructions
[here](https://github.com/awslabs/aws-cloudformation-templates/tree/master/community/codestar/custom-ci-cd-pipeline).
If you have any questions, feel free to drop me a message or add a comment to my
[pull request](https://github.com/awslabs/aws-cloudformation-templates/pull/135).
