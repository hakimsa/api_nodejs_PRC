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
          
          when {branch 'test' beforeAgent true}
               agent {label 'Devserver'}
          steps {
            sh 'ls'
          }
        }

      }
    }

  }
}
