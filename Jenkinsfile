node ('local_ubuntu'){  
 //def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('Build and Tag'){
        // app = docker.build("pa1kilaparthi/snake_game")
        sh "docker build -t pa1kilaparthi/snake_game ."
    }   
    // stage('Publist To DockerHUb'){
    //     docker.withRegistry('https://registry.hub.docker.com','pa1_docker_cred')
    //     app.push("latest")
    // } 
    // stage('Pull Image and Run a Container') {
    //     sh "docker-compose down"
    //     sh "docker-compose up -d"
    // }
    stage('Build') {
        /* Let's make sure we have the repository cloned to our workspace */
       echo "Build"
    }


    stage('archani_by_script') {
        /* Let's make sure we have the repository cloned to our workspace */
      sh /home/pavankumar/jenkins/archani/arachni-1.5.1-0.5.12/bin/arachni http://172.18.3.141/ --report-save-path=${BUILD_TAG}.afr
      sh /home/pavankumar/jenkins/archani/arachni-1.5.1-0.5.12/bin/arachni_reporter ${BUILD_TAG}.afr --reporter=html:outfile=${BUILD_TAG}.zip
      sh unzip ${BUILD_TAG}.zip
      sh rm -rf ${BUILD_TAG}.zip   


      publishHTML target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'coverage',
            reportFiles: 'index.html',
            reportName: 'archani Report'     

    }
    stage('Arachani') {
        /* Let's make sure we have the repository cloned to our workspace */
        // environment { 
        //             name= pavan
        //         }
            //steps {
                // echo $name
                build 'DAST-Arachini'
           // }
       //build 'DAST-Arachini'
    }
}


