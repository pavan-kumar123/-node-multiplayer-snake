node ('local_ubuntu'){  
 def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('Build and Tag'){
        app = docker.build(pa1kilaparthi/snake_game)
    }   
    stage('Publist To DockerHUb'){
        docker.withRegistry('https://registry.hub.docker.com','pa1_docker_cred')
    } 
    stage('Pull Image and Run a Container') {
        sh "docker-compose down"
        sh "docker-compose up -d"
    }
}


