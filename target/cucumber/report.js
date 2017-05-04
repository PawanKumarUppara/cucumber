$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "loginfeature",
  "description": "this feature deals with hte login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter the following for details",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "userhere",
        "adminPassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 116036540,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_enter_the_username_as_admin_and_password_as_admin(DataTable)"
});
formatter.result({
  "duration": 19180693,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_click_login_button()"
});
formatter.result({
  "duration": 42338,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_should_see_the_user_form_page()"
});
formatter.result({
  "duration": 26087,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "i enter admin and adminPassword  using scenario outline",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15
    },
    {
      "cells": [
        "admin",
        "adminPassword"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 185174,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CalculatorSteps.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculatorSteps.i_should_see_the_user_form_page()"
});
formatter.result({
  "status": "skipped"
});
});