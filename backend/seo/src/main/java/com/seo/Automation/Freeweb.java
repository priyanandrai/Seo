package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Freeweb implements Interface{
	String website="http://www.free-web-submission.co.uk/";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException {
		try {
			driver.get(website);

			// Fill the name
			String path3 = "//input[@name='name']";
			WebElement sendname = driver.findElement(By.xpath(path3));
			sendname.click();
			sendname.sendKeys(dto.getName());

			// Fill the email id
			String path2 = "//input[@name='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			// Fill the url
			String path = "//input[@name='custom Website Address']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			// Click on submit button
			String path5 = "//input[@id='submit']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
}
