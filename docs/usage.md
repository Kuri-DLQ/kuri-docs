# Usage
To install Kuri run the following command globally:
![kuri-install](../static/img/kuri-install.png)
To view the Kuri commands run the `kuri` command:
![kuri-help](../static/img/kuri-help.png)
To deploy the Kuri DLQ service run the kuri deploy command and you will be prompted with the following initializing questions.
1. `Choose a starting template` -- you can either choose for Kuri to create a "Main Queue and DLQ" for a brand new project or if you want to add Kuri to an existing project that already has a main queue select the "DLQ Only" option. If you choose "DLQ Only" you will be prompted to provide your existing main queue url.
2. `What is your AWS region?` -- provide your AWS Region. This needs to be the same region that your project is deployed in and your AWS CLI is configured to.
3. `Would you like to see notifications from Kuri in Slack?` -- if you choose to receive a Slack notification when a message appears in your Kuri dead-letter queue, provide your Slack API Webhook Path. For more details see: https://api.slack.com/apps
![kuri-deploy](../static/img/kuri-deploy.png)
Once the Kuri DLQ has been deployed, you can run kuri view to launch the Kuri Dashboard. Once run, the dashboard should pop open within a minute. Note: sometimes launching the dashboard can take up to a few minutes.
![kuri-view](../static/img/kuri-view.png)
