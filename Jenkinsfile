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
            sh  ' echo  deployement to  test  server '
            sh 'mkdir -p /deployed/dev'
            sh ' touch $(date "+%d-%m-%Y")_histo_deployed.txt'
            sh ' cd /deployed/dev'
             
            echo "During Build currentResult: ${currentBuild.currentResult}"
         
            sh ' echo $(date "+%F-%H-%M-%S")_$GIT_BRANCH_$BUILD_NUMBER_$JOB_NAME>> $(date "+%d-%m-%Y")_histo_deployed.txt'
            sh ' echo install dependencias'  
          
            sh ' cd /jenkins/slave/build/workspace/_Preproduction_multi_branch_test'
            script{
            sh 'nohup sh run.sh' 
              sh 'exit'
            }
            sh ' COMAND=$(ps aux |grep node)'  
          
         
    
}
          }
        }

      }
    }

  
}
