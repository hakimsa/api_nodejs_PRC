pipeline {
  agent any
  stages {
    stage('Clear packages') {
      parallel {
        stage('Clear packages') {
          steps {
            echo 'Clear packeges init'
          }
        }

        stage('add packege') {
          steps {
            isUnix()
          }
        }

        stage('Customization packges') {
          steps {
            sh 'ls'
          }
        }
        
        stage('Deployed_test') {
          
  
               agent { label 'dev'}
          steps {
            sh 'ls'
            sh  ' echo  deployed en Devserver'
            sh 'mkdir -p /deployed/dev'
            sh ' touch script.txt'
            sh ' echo ok yes >> script.txt'
          }
        }

      }
    }

  }
}
