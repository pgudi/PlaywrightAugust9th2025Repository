
@Execute
Feature: Verify Create User Functionality
  Scenario: Verify Create User Functionality
    Given I launch chromium Browser
    Given I navigate the Application URL
    Then I find the Login Page
    When I enter username in Username text field
    When I enter password in Password text field
    When I click on Login Button the Login Page
    Then I find the Home Page
    Then I minimize the flyout window
    Given I click on User Menu
    When I click on Add User Button
    When I enter firstname in Firstname text field
    When I enter lastname in lastname text field
    When I enter email in emailId text field
    When I enter username in username text field of user page
    When I enter password in password text field of user page
    When I enter retype password in password text field of user page
    When I click create user Button
    Then I find the newly created user in user list page
    Given I click on newly created user
    When I deleted the user by clicking on OK button in alert
    Given I find the Logout Link in the Home Page
    When I click on Logout link in the Home page
    Then I find the Login Page
    Then I close chromium Browser