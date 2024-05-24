FROM openjdk
COPY . /java
WORKDIR /java
RUN javac Main.java
CMD ["java", "Main"]