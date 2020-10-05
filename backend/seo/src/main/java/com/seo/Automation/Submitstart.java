package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Submitstart implements Interface{
	String website="https://www.submitstart.com/";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException {
		try {
			driver.get(website);

			// Fill the url
			String path = "//input[@id='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			// Fill the email id
			String path2 = "//input[@id='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());

			// Click on submit button
			String path5 = "//button[@id='submit']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
