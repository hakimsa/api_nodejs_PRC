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
            sh ' cd /deployed/dev'
            sh ' echo ok yes is ok el deployememnt >> script.txt'
            sh ' echo install dependencias'
            sh ' cd /jenkins/slave/build/workspace/_Preproduction_multi_branch_test'
            sh ' rm -rf package-lock.json'
            sh 'npm -i'
            sh ' npm install'
     
          }
        }

      }
    }

  }
}
