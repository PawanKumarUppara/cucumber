Feature: loginfeature
  this feature deals with hte login functionality of the application

  Scenario: Login with correct username and password
    Given I navigate to the login page
    And i enter the following for details
      | username | password      |
      | userhere | adminPassword |
    And i click login button
    Then i should see the userform page

  Scenario Outline: Login with correct username and password
    Given I navigate to the login page
    And i enter <username> and <password>  using scenario outline
      | username | password      |
      | admin    | adminPassword |
    And i click login button
    Then i should see the userform page

    Examples: 
      | username | password      |
      | admin    | adminPassword |
