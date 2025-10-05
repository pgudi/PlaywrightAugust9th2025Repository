
@Execute
Feature: Verify Login and Logout Functionality
  Scenario: Verify Login and Logout
    # Given I launch chromium Browser
    Given I navigate the Application URL
    Then I find the Login Page
    When I enter username in Username text field
    When I enter password in Password text field
    When I click on Login Button the Login Page
    Then I find the Home Page
    Then I minimize the flyout window
    Given I find the Logout Link in the Home Page
    When I click on Logout link in the Home page
    Then I find the Login Page
    # Then I close chromium Browser