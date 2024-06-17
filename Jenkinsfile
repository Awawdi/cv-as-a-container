pipeline {
  agent none
  stages {     
    stage('Docker Build') {
      steps {
        sh 'docker build -t orsanaw/cv-as-a-cont:latest .'
      }
    }
   }
 }