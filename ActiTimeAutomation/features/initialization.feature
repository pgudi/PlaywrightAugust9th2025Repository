
Feature: Verify Initialization of Browser and Navigate URL Functionality
  Scenario: Verify Initialization of Browser and Navigate URL
    Given I launch chromium Browser
    When I navigate the Application URL
    Then I find the Login Page
    Then I close chromium Browser