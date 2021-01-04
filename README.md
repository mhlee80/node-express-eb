# 시작하기 전에
1. platfome branch 설정시 64bit Amazon Linux로 해야 예제 샘플의 staticfiles 부분까지 모두 동작한다.
2. 64bit Amazon Linux 2로 하였을 경우, 동작 방법은 아직 찾지 못했다.
3. [Link](https://github.com/aws-samples/eb-node-express-sample/issues/18#issuecomment-740832057)
```
[mhlee@node-express]$ eb init

Select a default region
1) us-east-1 : US East (N. Virginia)
2) us-west-1 : US West (N. California)
3) us-west-2 : US West (Oregon)
4) eu-west-1 : EU (Ireland)
5) eu-central-1 : EU (Frankfurt)
6) ap-south-1 : Asia Pacific (Mumbai)
7) ap-southeast-1 : Asia Pacific (Singapore)
8) ap-southeast-2 : Asia Pacific (Sydney)
9) ap-northeast-1 : Asia Pacific (Tokyo)
10) ap-northeast-2 : Asia Pacific (Seoul)
11) sa-east-1 : South America (Sao Paulo)
12) cn-north-1 : China (Beijing)
13) cn-northwest-1 : China (Ningxia)
14) us-east-2 : US East (Ohio)
15) ca-central-1 : Canada (Central)
16) eu-west-2 : EU (London)
17) eu-west-3 : EU (Paris)
18) eu-north-1 : EU (Stockholm)
19) eu-south-1 : EU (Milano)
20) ap-east-1 : Asia Pacific (Hong Kong)
21) me-south-1 : Middle East (Bahrain)
22) af-south-1 : Africa (Cape Town)
(default is 3): 10


Select an application to use
1) express
2) [ Create new Application ]
(default is 2): 2


Enter Application Name
(default is "node-express"): 
Application node-express has been created.
Select a platform.
1) .NET Core on Linux
2) .NET on Windows Server
3) Docker
4) GlassFish
5) Go
6) Java
7) Node.js
8) PHP
9) Packer
10) Python
11) Ruby
12) Tomcat
(make a selection): 7

Select a platform branch.
1) Node.js 12 running on 64bit Amazon Linux 2
2) Node.js 10 running on 64bit Amazon Linux 2
3) Node.js running on 64bit Amazon Linux
(default is 1): 3

Cannot setup CodeCommit because there is no Source Control setup, continuing with initialization
Do you want to set up SSH for your instances?
(Y/n): n
[mhlee@node-express]$ cd ..
[mhlee@nodejs-eb]$ cd express/
[mhlee@express]$ eb terminate
The environment "node-express-env" and all associated instances will be terminated.
To confirm, type the environment name: node-express-env
2021-01-02 12:29:07    INFO    terminateEnvironment is starting.
2021-01-02 12:29:25    INFO    Deleted CloudWatch alarm named: awseb-e-ft72smmmht-stack-AWSEBCloudwatchAlarmLow-SX2DCQ0ME2Q2 
2021-01-02 12:29:25    INFO    Deleted CloudWatch alarm named: awseb-e-ft72smmmht-stack-AWSEBCloudwatchAlarmHigh-I6O3OSM7PLMO 
2021-01-02 12:29:25    INFO    Deleted Auto Scaling group policy named: arn:aws:autoscaling:ap-northeast-2:396348732515:scalingPolicy:8c128944-98d1-4385-b343-f4d62dd40261:autoScalingGroupName/awseb-e-ft72smmmht-stack-AWSEBAutoScalingGroup-1PMPZADGN9MYD:policyName/awseb-e-ft72smmmht-stack-AWSEBAutoScalingScaleUpPolicy-1N8IYIKPMB382
2021-01-02 12:29:25    INFO    Deleted Auto Scaling group policy named: arn:aws:autoscaling:ap-northeast-2:396348732515:scalingPolicy:deb4bdf6-0d8d-470e-9898-6b3b42023306:autoScalingGroupName/awseb-e-ft72smmmht-stack-AWSEBAutoScalingGroup-1PMPZADGN9MYD:policyName/awseb-e-ft72smmmht-stack-AWSEBAutoScalingScaleDownPolicy-1WCG218BJCJCI
2021-01-02 12:29:25    INFO    Waiting for EC2 instances to terminate. This may take a few minutes.
2021-01-02 12:32:12    INFO    Deleted Auto Scaling group named: awseb-e-ft72smmmht-stack-AWSEBAutoScalingGroup-1PMPZADGN9MYD
2021-01-02 12:32:13    INFO    Deleted load balancer named: awseb-e-f-AWSEBLoa-K3TJZOL0K1H3
2021-01-02 12:32:13    INFO    Deleted Auto Scaling launch configuration named: awseb-e-ft72smmmht-stack-AWSEBAutoScalingLaunchConfiguration-CIX408EC3FW7
2021-01-02 12:32:13    INFO    Deleted security group named: awseb-e-ft72smmmht-stack-AWSEBSecurityGroup-1WRKQYTXUFNY6
2021-01-02 12:33:44    INFO    Deleted security group named: sg-0fbb23bec7e5bd07e
2021-01-02 12:33:49    INFO    Deleting SNS topic for environment node-express-env.
2021-01-02 12:33:50    INFO    terminateEnvironment completed successfully.
                                
[mhlee@express]$ cd ..
[mhlee@nodejs-eb]$ cd node-express/
[mhlee@node-express]$ express && npm install

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options

destination is not empty, continue? [y/N] y

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.jade
   create : views/index.jade
   create : views/layout.jade
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=node-express:* npm start

npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade

added 99 packages, and audited 99 packages in 2s

5 vulnerabilities (3 low, 2 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
[mhlee@node-express]$ git init
Initialized empty Git repository in /Users/mhlee/projects/nodejs-eb/node-express/.git/
[mhlee@node-express]$ vi .gitignore
[mhlee@node-express]$ eb create --sample node-express-env
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
Environment details for: node-express-env
  Application name: node-express
  Region: ap-northeast-2
  Deployed Version: Sample Application
  Environment ID: e-65egicd5ng
  Platform: arn:aws:elasticbeanstalk:ap-northeast-2::platform/Node.js running on 64bit Amazon Linux/4.17.1
  Tier: WebServer-Standard-1.0
  CNAME: UNKNOWN
  Updated: 2021-01-02 12:37:02.849000+00:00
Printing Status:
2021-01-02 12:37:01    INFO    createEnvironment is starting.
2021-01-02 12:37:03    INFO    Using elasticbeanstalk-ap-northeast-2-396348732515 as Amazon S3 storage bucket for environment data.
2021-01-02 12:37:24    INFO    Created security group named: sg-042d03f89d86471a2
2021-01-02 12:37:24    INFO    Created load balancer named: awseb-e-6-AWSEBLoa-TG6GS26GJ49P
2021-01-02 12:37:42    INFO    Created security group named: awseb-e-65egicd5ng-stack-AWSEBSecurityGroup-1ELGVX5TI82T0
2021-01-02 12:37:42    INFO    Created Auto Scaling launch configuration named: awseb-e-65egicd5ng-stack-AWSEBAutoScalingLaunchConfiguration-GZL6F3O0UZ32
2021-01-02 12:38:44    INFO    Created Auto Scaling group named: awseb-e-65egicd5ng-stack-AWSEBAutoScalingGroup-1OAN5FB4MFMCQ
2021-01-02 12:38:45    INFO    Waiting for EC2 instances to launch. This may take a few minutes.
2021-01-02 12:38:45    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:ap-northeast-2:396348732515:scalingPolicy:fbdf3bd3-5454-447a-b466-d94a7846b733:autoScalingGroupName/awseb-e-65egicd5ng-stack-AWSEBAutoScalingGroup-1OAN5FB4MFMCQ:policyName/awseb-e-65egicd5ng-stack-AWSEBAutoScalingScaleUpPolicy-79IPEL8VWT5A
2021-01-02 12:38:45    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:ap-northeast-2:396348732515:scalingPolicy:60c25a5f-47c5-40c2-849a-fce70c3394b9:autoScalingGroupName/awseb-e-65egicd5ng-stack-AWSEBAutoScalingGroup-1OAN5FB4MFMCQ:policyName/awseb-e-65egicd5ng-stack-AWSEBAutoScalingScaleDownPolicy-63C8K41GZQPX
2021-01-02 12:38:45    INFO    Created CloudWatch alarm named: awseb-e-65egicd5ng-stack-AWSEBCloudwatchAlarmHigh-M92FV0M9M26F
2021-01-02 12:38:45    INFO    Created CloudWatch alarm named: awseb-e-65egicd5ng-stack-AWSEBCloudwatchAlarmLow-1BGHHZ7SVLS11
2021-01-02 12:39:38    INFO    Application available at node-express-env.eba-inkvpfy6.ap-northeast-2.elasticbeanstalk.com.
2021-01-02 12:39:39    INFO    Successfully launched environment: node-express-env
                                
[mhlee@node-express]$ eb open
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
WARNING: Git is in a detached head state. Using branch "default".
[mhlee@node-express]$ git add .
[mhlee@node-express]$ git commit -m "first express app"
[master (root-commit) fe4fa88] first express app
 11 files changed, 1871 insertions(+)
 create mode 100644 .ebextensions/nodecommand.config
 create mode 100644 app.js
 create mode 100755 bin/www
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/stylesheets/style.css
 create mode 100644 routes/index.js
 create mode 100644 routes/users.js
 create mode 100644 views/error.jade
 create mode 100644 views/index.jade
 create mode 100644 views/layout.jade
[mhlee@node-express]$ eb deploy node-express-env
Creating application version archive "app-fe4f-210102_214439".
Uploading node-express/app-fe4f-210102_214439.zip to S3. This may take a while.
Upload Complete.
2021-01-02 12:44:42    INFO    Environment update is starting.      
2021-01-02 12:45:21    INFO    Deploying new version to instance(s).
2021-01-02 12:46:08    INFO    New application version was deployed to running EC2 instances.
2021-01-02 12:46:08    INFO    Environment update completed successfully.
[mhlee@node-express]$ eb open node-express-env
[mhlee@node-express]$ git add .
[mhlee@node-express]$ git commit -m "Add hikes route and template."
[master 832ef09] Add hikes route and template.
 3 files changed, 14 insertions(+)
 create mode 100644 routes/hike.js
 create mode 100644 views/hike.jade
[mhlee@node-express]$ eb deploy node-express-env
Creating application version archive "app-832e-210102_215416".
Uploading node-express/app-832e-210102_215416.zip to S3. This may take a while.
Upload Complete.
2021-01-02 12:54:19    INFO    Environment update is starting.      
2021-01-02 12:54:23    INFO    Deploying new version to instance(s).
2021-01-02 12:54:49    INFO    New application version was deployed to running EC2 instances.
2021-01-02 12:54:49    INFO    Environment update completed successfully.

# 아래는 staticfiles 적용을 위한 테스트이다.
# style.css에 p태그의 글자색을 추가
# staticfiles가 동작한다면, /hikes 페이지의 글자색이 변경되어야 한다.

[mhlee@node-express]$ git add .
[mhlee@node-express]$ git commit -m "Add css for p tag"
[master 78a418c] Add css for p tag
 1 file changed, 4 insertions(+)
[mhlee@node-express]$ eb deploy node-express-env
Creating application version archive "app-78a4-210102_215650".
Uploading node-express/app-78a4-210102_215650.zip to S3. This may take a while.
Upload Complete.
2021-01-02 12:56:52    INFO    Environment update is starting.      
2021-01-02 12:56:56    INFO    Deploying new version to instance(s).
2021-01-02 12:57:23    INFO    New application version was deployed to running EC2 instances.
2021-01-02 12:57:23    INFO    Environment update completed successfully.

# 하지만 글자색은 변경되지 않음
# staticfiles.config에서 경로는 /public으로 적용하였는데,
# layout.jade의 경로는 '/public'이 포함되어 있지 않음
# 따라서 css 경로를 변경 /stylesheets/style.css -> /public/stylesheets/style.css

[mhlee@node-express]$ git add .
[mhlee@node-express]$ git commit -m "change css href"
[master a7b34f1] change css href
 1 file changed, 1 insertion(+), 1 deletion(-)
[mhlee@node-express]$ eb deploy node-express-env
Creating application version archive "app-a7b3-210102_215841".
Uploading node-express/app-a7b3-210102_215841.zip to S3. This may take a while.
Upload Complete.
2021-01-02 12:58:43    INFO    Environment update is starting.      
2021-01-02 12:58:47    INFO    Deploying new version to instance(s).
2021-01-02 12:59:14    INFO    New application version was deployed to running EC2 instances.
2021-01-02 12:59:14    INFO    Environment update completed successfully.

# 글자색 적용 확인
# /public/stylesheets/style.css 접근 가능 확인
```

# Database 연결
1. [데이터베이스 추가하기](https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds.html)
2. MySQLWorkbench로 연결하려면 '보안 그룹' -> '인바운드 규칙'에 'MySQL/Aurora'에 대한 항목을 추가한다.

# Future Work
1. 통합환경에서 configuration으로 database 설치
2. 통합환경에서 snapshot으로 부터 database 복원
