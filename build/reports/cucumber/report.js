$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "book Ticket from mumbai to delhi",
  "description": "",
  "id": "homepage;book-ticket-from-mumbai-to-delhi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user search flight from mumbai",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user entered departure place",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user entered arrival place",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select departure date tomorrow",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user search for flight",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user select non stop option from mumbai",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user select 6AM-12PM in departure from mumbai",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on the view prices of the airline",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user select the book now button",
  "keyword": "Then "
});
formatter.match({
  "location": "home_pagedef.user_search_flight_from_mumbai()"
});
formatter.result({
  "duration": 3265464600,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.homePage.searchPlace(homePage.java:27)\r\n\tat StepDef.home_pagedef.user_search_flight_from_mumbai(home_pagedef.java:17)\r\n\tat ✽.Then user search flight from mumbai(HomePage.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "home_pagedef.user_entered_departure_place()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_entered_arrival_place()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_select_departure_date_tomorrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_search_for_flight()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_select_non_stop_option_from_mumbai()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 16
    }
  ],
  "location": "home_pagedef.user_select_AM_PM_in_departure_from_mumbai(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_click_on_the_view_prices_of_the_airline()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "home_pagedef.user_select_the_book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login to Makemytrip",
  "description": "",
  "id": "login;login-to-makemytrip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigate to site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user entered valid username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter login button",
  "keyword": "Then "
});
formatter.match({
  "location": "login_def.user_navigate_to_site()"
});
formatter.result({
  "duration": 7727598200,
  "status": "passed"
});
formatter.match({
  "location": "login_def.click_on_login_button()"
});
formatter.result({
  "duration": 390743500,
  "status": "passed"
});
formatter.match({
  "location": "login_def.user_entered_valid_username()"
});
formatter.result({
  "duration": 20102110900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027SNEFFELS-QA5L\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\rajha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64720}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 60eb9475a4705b3447430e2f4adfb9c0\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.Login.enterUsername(Login.java:31)\r\n\tat StepDef.login_def.user_entered_valid_username(login_def.java:31)\r\n\tat ✽.Then user entered valid username(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "login_def.user_entered_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "login_def.user_enter_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/BookHotel.feature");
formatter.feature({
  "line": 1,
  "name": "BookHotel",
  "description": "",
  "id": "bookhotel",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Book Hotel in Mumbai",
  "description": "",
  "id": "bookhotel;book-hotel-in-mumbai",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigate to makemytrip",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user click on hotel",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter mumbai location",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select date",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user search for hotel in mumbai",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user verify the result are getting display for mumbai location",
  "keyword": "Then "
});
formatter.match({
  "location": "BookHotel_def.user_navigate_to_makemytrip()"
});
formatter.result({
  "duration": 240700,
  "status": "passed"
});
formatter.match({
  "location": "BookHotel_def.user_click_on_hotel()"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "location": "BookHotel_def.user_enter_mumbai_location()"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "location": "BookHotel_def.user_select_date()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.match({
  "location": "BookHotel_def.user_search_for_hotel_in_mumbai()"
});
formatter.result({
  "duration": 56200,
  "status": "passed"
});
formatter.match({
  "location": "BookHotel_def.user_verify_the_result_are_getting_display_for_mumbai_location()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
});