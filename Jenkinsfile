pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/DayoAsaolu/attend', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh 'docker-compose up --build -d'
      }
    }

    stage('Slack Notification'){
      steps {
        slackSend baseUrl: 'https://hooks.slack.com/services/', channel: 'jenkins-pipeline', color: 'good', message: 'msg: Welcome to jenkins, build was success', teamDomain: 'frequency', tokenCredentialId: 'slack-demo'
      }
    }

    stage('shut down') { 
    steps {
        input message: 'Finished using the web site? (Click "Proceed" to continue)' 
        sh 'docker-compose down'
    }
}

  }
}