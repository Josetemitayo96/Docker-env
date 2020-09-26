pipeline {
    agent any
    stages{

        stage('Preparation') {
            checkout scm
        }
        
        stage('Install'){
            nodejs(nodeJSInstallationName: 'nodejs'){
                sh 'npm install'
            }
        }

        stage('docker build'){
            sh 'docker build --build-arg tayo=WORKING, --build-arg ife=GREAT .'
        }
    }
}