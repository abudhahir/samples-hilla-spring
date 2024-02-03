## Stack
* Spring Boot,
* Vaadin,
* Hilla,
* React,
* TypeScript,
* Java 11

## Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project.

## Deploying to Production

To create a production build, call `mvnw clean package -Pproduction` (Windows),
or `./mvnw clean package -Pproduction` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources,
ready to be deployed. The file can be found in the `target` folder after the build completes.

Once the JAR file is built, you can run it using
`java -jar target/myapp-1.0-SNAPSHOT.jar` (NOTE, replace
`myapp-1.0-SNAPSHOT.jar` with the name of your jar).

## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).
- Spring Boot: [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
- Vaadin: [https://vaadin.com](https://vaadin.com)
- React: [https://reactjs.org/](https://reactjs.org/)
- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Java 11: [https://www.oracle.com/java/technologies/javase-jdk11-downloads.html](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Hilla: [https://hilla.dev](https://hilla.dev)
- Other [start.spring.io](https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.5.4&packaging=jar&jvmVersion=11&groupId=com.example&artifactId=myapp&name=myapp&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.myapp&dependencies=web,data-jpa,vaadin,devtools,postgresql,liquibase,security,oauth2,actuator,thymeleaf,webflux,reactor-netty,cloud-gateway,cloud-eureka,cloud-config-server,cloud-hystrix,cloud-feign,cloud-hystrix-dashboard,cloud-zuul,cloud-oauth2,cloud-security)

