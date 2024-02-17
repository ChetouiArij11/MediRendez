pipeline {
    agent any

    environment {
        // Définir d'autres variables d'environnement au besoin
        DOCKER_REGISTRY_CREDENTIALS = credentials('arijchetoui') // Créez des identifiants Docker dans Jenkins et référencez-les ici
        DOCKER_IMAGE = 'arijchetoui1/medirendez' // Nom de votre image Docker
        DOCKER_REGISTRY_URL = 'https://hub.docker.com/repositories/arijchetoui1' // URL de votre registre Docker
        VERSION = getGitVersion()
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ChetouiArij11/MediRendez'
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
                    docker.withRegistry('', "${DOCKER_REGISTRY_CREDENTIALS}") {
                        docker.image("${DOCKER_IMAGE}:${VERSION}").push()
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
    }
}

def getGitVersion() {
    bat(script: 'for /f %%h in (\'git rev-parse --short HEAD\') do echo %%h', returnStdout: true).trim()
}
