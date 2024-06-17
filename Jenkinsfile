pipeline {
    agent none
   stages {     
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t orsanaw/cv-as-a-cont:latest .'
      }
    }
   }
 }