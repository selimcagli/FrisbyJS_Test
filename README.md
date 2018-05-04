# FrisbyJS Tests

Test adımlarına başlamadan önce bilgisayarda node.js kurulu olmalıdır.

Projeyi indirdikten sonra aşağıdaki adımları izleyerek testi gerçekleştirebilirsiniz. (Proje Komut satırı kullanılarak indirilebilir  => git clone https://github.com/selimcagli/FrisbyJS_Test.git)

Testler 2 şekilde yapılabilir
1. Proje içirisindeki ShellScriptler çalıştırılarak. 
     - SetupAndRunTests.sh
          - Kurulumlardan sonra tekrar test çalıştırılmak istendiğinde ise RunTests.sh shellscript in çalıştırılması yeterlidir 

2. Aşağıdaki Yöntemler sırası ile uygulanarak.

-	Öncelikle frisby kütüphanesinin  2.0.5 versiyonunu npm aracılığı indirmek gerekiyor. Frisby kütüphanesini indirmek için, projenin root klasörü üzerinde, aşağıdaki komut u çalıştırmak yeterlidir.
     - npm install frisby@2.0.5

-	Proje "jest" kütüphanesi kullanılarak koşulmalıdır. "jest" kütühanesi aşağıdaki komut kullanılarak indirilebilir   
     - npm install jest

-	Testi çalıştırmak için Projenin root klasöründen /node_modules/.bin/ klasöründe aşağıdaki komut satırını çalıştırmak yeterlidir.
     -	./jest