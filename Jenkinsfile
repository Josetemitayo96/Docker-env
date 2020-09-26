pipeline {
    agent any
    stages{

        stage('Preparation') {
            steps{
                checkout scm
            }
        }
        
        stage('Install'){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs'){
                    sh 'npm install'
                }
            }
        }

        stage('docker build'){
            steps{
                sh 'docker build --build-arg tayo=WORKING, --build-arg ife=GREAT .'
            }
        }

    }
}