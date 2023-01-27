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
          
           sh ' cd /jen kins/slave/build/workspace/n_livarison__api_nodejs_PRC_test'
            sh' pwd  '
            sh '
            
            DIR="/jenkins/slave/build/workspace/n_livarison__api_nodejs_PRC_test"
             if [ -d "$DIR" ]; then
           ### Take action if $DIR exists ###
            echo "Installing config files in ${DIR}..."
            cd /jenkins/slave/build/workspace/n_livarison__api_nodejs_PRC_test'
            pwd
            else
           ###  Control will jump here if $DIR does NOT exists ###
            echo "Error: ${DIR} not found. Can not continue."
            
            exit 1
           fi
         
            
            script{
            sh 'sudo nohup sh run.sh ' 
             
            }
            sh ' COMAND=$(ps aux |grep node)'  
          
         
    
}
          }
        }

      }
    }

  
}
