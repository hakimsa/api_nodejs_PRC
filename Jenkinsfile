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
            sh ' date_now=$(date "+DATE: %D%nTIME: %T")'
            sh ' echo $date_now_$BUILD_NUMBER_$GIT_BRANCH >> histo_deplyed.txt'
            sh ' echo $(date "+%F-%H-%M-%S")_$GIT_BRANCH_$BUILD_NUMBER_$JOB_NAME >> script.txt'
            sh ' echo install dependencias'
            sh ' cd /jenkins/slave/build/workspace/_Preproduction_multi_branch_test'
            
            sh ' pwd '
            sh ' npm install 16.15.1'
            sh ' node -v'
            sh ' COMAND=$(ps aux |grep node)'
            sh 'echo $COMAND'
     
          }
        }

      }
    }

  }
}
