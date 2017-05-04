package com.czeczotka.bdd.steps;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CalculatorSteps {

	@Given("^I navigate to the login page$")
	public void i_navigate_to_the_login_page() throws Throwable {
		System.out.println("hi");

	}

	@Then("^i should see the userform page$")
	public void i_should_see_the_user_form_page() throws Throwable {

	}

	@And("i enter the following for details$")
	public void i_enter_the_username_as_admin_and_password_as_admin(DataTable dataTable) throws Throwable {
		//List<List<String>> data = dataTable.raw();
		//System.out.println(data.get(1).get(0));
		List<User> users=new ArrayList<>();
		users=dataTable.asList(User.class);

		for(User user:users){
			System.out.println("the user name is"+user.username);
		}
	}


	@And("^i click login button$")
	public void i_click_login_button() throws Throwable {
	}

	@And("^i enter ([^\"]*) and ([^\"]*) $")
	public void i_enter_and(String username, String password) throws Throwable {
		
		System.out.println(username);
		throw new PendingException();
	}

}
