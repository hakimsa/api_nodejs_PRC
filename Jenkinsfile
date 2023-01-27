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

        stage('Customization dependencies') {
          steps {
            sh 'echo Install dependencies'
            sh' npm install express'
           sh'npm install body-parser'
            sh' npm install -D nodemon '
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
          
         
            sh ' echo $(date "+%F-%H-%M-%S")_$GIT_BRANCH_$BUILD_NUMBER_$JOB_NAME>> $(date "+%d-%m-%Y")_histo_deployed.txt'
            sh ' echo install dependencias'  
          
           sh ' cd /jenkins/slave/build/workspace/n_livarison__api_nodejs_PRC_test'
            sh' pwd  '
            sh 'sh deploy.sh'
  
            script{
            sh 'sudo nohup sh run.sh ' 
             
            }
            sh ' COMAND=$(ps aux |grep node)'  
            
           echo "During Build currentResult: ${currentBuild.currentResult}"
          
         
    
}
          }
        }

      }
    }

  
}
