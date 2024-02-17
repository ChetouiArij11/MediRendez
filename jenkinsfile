pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'arijchetoui1/medirendez'
        VERSION = getGitVersion()
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ChetouiArij11/MediRendez.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${VERSION}")
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    docker.withRegistry('', '') {
                        docker.image("${DOCKER_IMAGE}:${VERSION}").push()
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
    }
}

def getGitVersion() {
    bat(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
}
