FROM amazoncorretto:11-alpine-jdk 
MAINTAINER Matias
COPY target/matias-0.0.1-SNAPSHOT.jar  matias.jar
ENTRYPOINT ["java","-jar","/matias.jar"]