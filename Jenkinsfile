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
            sh ' echo date_now=$(date "+DATE: %D%nTIME: %T") $date_now_$GIT_BRANCH >> histo_deplyed.txt'
            sh ' echo install dependencias'
            sh ' cd /jenkins/slave/build/workspace/_Preproduction_multi_branch_test'
            sh ' node index.js'
           
            sh ' COMAND=$({ps aux |grep node})'
            sh 'echo $COMAND'
     
          }
        }

      }
    }

  }
}
