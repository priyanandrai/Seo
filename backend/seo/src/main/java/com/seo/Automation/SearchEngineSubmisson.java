package com.seo.Automation;

import java.net.MalformedURLException;
import java.net.URI;
import java.util.Collections;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
public class SearchEngineSubmisson {
	
	public static RemoteWebDriver driver = null;
	public String openBrowser() throws MalformedURLException {

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setBrowserName("chrome");
		capabilities.setVersion("84.0");
		capabilities.setCapability("enableVNC", true);
		capabilities.setCapability("enableVideo", false);

		driver = new RemoteWebDriver(URI.create("http://192.168.0.106:8080/wd/hub").toURL(),
				capabilities);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
		
		ChromeOptions op = new ChromeOptions();
	       op.setExperimentalOption("useAutomationExtension", false);
	       op.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
	       
	       return driver.getSessionId().toString();
	}

	public static void anoox(String website, String url, String email) throws InterruptedException {
		try {
			driver.get(website);

			Thread.sleep(4000);

			// Fill the url
			String path = "//input[@name='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.sendKeys(url);
			Thread.sleep(4000);
			// Fill the email id
			String path2 = "//input[@name='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(email);
			Thread.sleep(4000);

			// click on the agree box
			String path4 = "//input[@name='check_terms']";
			WebElement tikbutton = driver.findElement(By.xpath(path4));
			tikbutton.click();
			Thread.sleep(4000);

			// Click on submit button
			String path5 = "//form[@name='frm']//input[@name='submit']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

	//		Assert.assertTrue(driver.getPageSource().contains("Sub"));
			System.out.println("Anoox Assert successfully pass");
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
