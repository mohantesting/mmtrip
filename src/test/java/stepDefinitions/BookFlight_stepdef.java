package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Flight;

public class BookFlight_stepdef {

	WebDriver driver = null;
	Flight bookFlight = new Flight(driver);

	@Given("^user navigate to site$")
	public void user_navigate_to_site() throws Throwable {
		bookFlight.clickOnURL();
	}

	@When("^user search flight from mumbai$")
	public void user_search_flight_from_mumbai() throws Throwable {
		bookFlight.searchPlace();
	}

	@And("^user entered departure place$")
	public void user_entered_departure_place() throws Throwable {
		bookFlight.departurePlace();
	}

	@And("^user entered arrival place$")
	public void user_entered_arrival_place() throws Throwable {
		bookFlight.arrivalPlace();
	}

	@And("^user select departure date tomorrow$")
	public void user_select_departure_date_tomorrow() throws Throwable {
		bookFlight.departureDate();
	}

	@And("^user search for flight$")
	public void user_search_for_flight() throws Throwable {
		bookFlight.clickOnSearchFlight();
	}

	@And("^user select non stop option from mumbai$")
	public void user_select_non_stop_option_from_mumbai() throws Throwable {
		bookFlight.clickOnNonstop();
	}

	@And("^user select (\\d+)AM-(\\d+)PM in departure from mumbai$")
	public void user_select_AM_PM_in_departure_from_mumbai(int arg1, int arg2) throws Throwable {
		bookFlight.checkflightTime();
	}
//do it
	@And("^user click on the view prices of the airline$")
	public void user_click_on_the_view_prices_of_the_airline() throws Throwable {
		bookFlight.clickOnViewPrice();
	}

	@And("^user select the book now button$")
	public void user_select_the_book_now_button() throws Throwable {
		bookFlight.clickOnBookNow();
		bookFlight.switchTabs();
		
	//travel details
	}

	@And("^user enter travellerdetails$")
	public void user_enter_travellerdetails() throws Throwable {

		bookFlight.travellerDetails();
	}
	//Verify my account
	@Then("^verify amount$")
	public void verify_amount() throws Throwable {

		Assert.assertEquals("Prices are not equal at Review and Summary Page... Review Amount = " + Flight.TotalAmountReviewPage + "while total amount = " + Flight.TotalAmountSummaryPage,true  ,Flight.TotalAmountReviewPage.equals(Flight.TotalAmountSummaryPage));
		bookFlight.closeBrowser();
	}


}
