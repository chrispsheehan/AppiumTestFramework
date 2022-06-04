Feature: Opening the app

  Scenario Outline: As a user, I can open the app

    Given I have tapped on the app
    When I tap on the sign up button
    Then I am asked for my email
