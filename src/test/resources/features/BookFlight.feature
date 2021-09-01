Feature: BookFlight
Scenario: login to Makemytrip
    Given user navigate to site
    When user search flight from mumbai
    And user entered departure place
    And user entered arrival place
    And user select departure date tomorrow
    And user search for flight
    And user select non stop option from mumbai
    And user select 6AM-12PM in departure from mumbai
    And user click on the view prices of the airline
    And user select the book now button
  	And user enter travellerdetails
 		Then  verify amount
    