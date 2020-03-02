import { browser, element, by } from "protractor";

describe("practice website test", function() {
  browser.get("https://rahulshettyacademy.com/angularpractice/");
  element(by.name("name")).sendKeys("umesh chandra");
  element(by.css("input[name='email']")).sendKeys("ucs9821@gmail.com");
  element(by.id("exampleInputPassword1")).sendKeys("umesh9821@");
  element(by.css("input[type='checkbox']")).click();
  element(
    by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")
  ).click();
  element
    .all(by.name("inlineRadioOptions"))
    .get(1)
    .click();
  element(by.buttonText("Submit"))
    .click()
    .then(function() {
      element(by.css("div[class*='success']"))
        .getText()
        .then(function(text) {
          console.log(text);
        });
    });
  browser.sleep(5000);
  element(by.name("name")).clear();
  element(by.name("name"))
    .sendKeys("m")
    .then(function() {
      element(by.css("[class='alert alert-danger']"))
        .getText()
        .then(function(text) {
          console.log(text);
        });
    });
  browser.sleep(5000);
  element(by.linkText("Shop")).click();
});
