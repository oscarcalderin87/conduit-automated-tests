@articles
Feature: Articles

  Scenario: Find Articles
    Given A new user
    And I want to create some articles
      | title      | description  | body                                        | tags               |
      | Article 1  | Test Article | A new article called Article 1 for testing  | public,advanced    |
      | Article 2  | Test Article | A new article called Article 2 for testing  | private            |
      | Article 3  | Test Article | A new article called Article 3 for testing  | public,simple,code |
      | Article 4  | Test Article | A new article called Article 4 for testing  | public,bug         |
      | Article 5  | Test Article | A new article called Article 5 for testing  | advanced           |
      | Article 6  | Test Article | A new article called Article 6 for testing  | code               |
      | Article 7  | Test Article | A new article called Article 7 for testing  | private,code       |
      | Article 8  | Test Article | A new article called Article 8 for testing  | private,advanced   |
      | Article 9  | Test Article | A new article called Article 9 for testing  | tag,advanced       |
      | Article 10 | Test Article | A new article called Article 10 for testing | public,tag         |
      | Article 11 | Test Article | A new article called Article 11 for testing | private,simple,tag |
    When I go to the login page
    And I check that I am on the Login Page
    Then I log in into the application using the registered user
    And I check that I am on the Feed Page of the registered user
    Then I go to the profile of the user
    And I check that the articles were created
