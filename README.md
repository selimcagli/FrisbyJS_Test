# FrisbyJS Tests

Before test, Node.js must be installed on computer.

After project downloaded, you can be able to perform tests

After downloading the project, you can perform the test by following the steps below. (Project can be download by command line => git clone https://github.com/selimcagli/FrisbyJS_Test.git)

Tests can be perform in 2 way
1. By shell script
     - SetupAndRunTests.sh
          - Run RunTests.sh shellscript is sufficient if you want to run the test again after installation

2. Applying the fallowing methods in order.

-	First you need to download frisby@2.0.5 by npm. To download Frisby library, it is enough to run the following command on root directory of project.
     - npm install frisby@2.0.5

-	The project must be run using the "jest" library. "jest" library can be downloaded using the command below   
     - npm install jest

-	The command below must be run on /node_modules/.bin/ directory.
     -	./jest
