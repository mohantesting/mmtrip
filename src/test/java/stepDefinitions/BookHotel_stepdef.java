package stepDefinitions;


import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Hotel;


public class BookHotel_stepdef {

	WebDriver driver = null;
	Hotel bookHotel = new Hotel(driver);

	@Given("^user navigate to makemytrip$")
	public void user_navigate_to_makemytrip() throws Throwable {
		bookHotel.clickOnURL();

	}

	@When("^user click on hotel$")
	public void user_click_on_hotel() throws Throwable {
		bookHotel.clickOnHotel();
	}

	@And("^user search for location$")
	public void user_search_for_location() throws Throwable {
		bookHotel.hotelLocationSearch();
	}

	@And("^user enter mumbai location$")
	public void user_enter_mumbai_location() throws Throwable {
		bookHotel.clickOnLocation();
	}

	@And("^user select date$")
	public void user_select_date() throws Throwable {
		bookHotel.checkInAndOutDate();
	}

	@And("^user search for hotel in mumbai$")
	public void user_search_for_hotel_in_mumbai() throws Throwable {
		bookHotel.searchHotel();
	}

	@Then("^user verify the result are getting displayed for mumbai location$")
	public void user_verify_the_result_are_getting_displayed_for_mumbai_location() throws Throwable {
		bookHotel.verifyPlace();
		SoftAssert asser=new SoftAssert();
		asser.assertTrue(Hotel.check1.contains("Mumbai"));
		bookHotel.closeBrowser();
	}

}
