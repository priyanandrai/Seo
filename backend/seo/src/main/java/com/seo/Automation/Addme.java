package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Addme implements Interface{
	String website="https://www.addme.com/submission/free-submission-start.php?redirect=no";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) {
		try {
			driver.get(website);

			String path = "//input[@id='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			String path2 = "//input[@id='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());

			Thread.sleep(4000);

			String path3 = "//input[@id='fname']";
			WebElement sendname = driver.findElement(By.xpath(path3));
			sendname.click();
			sendname.sendKeys(dto.getName());
			Thread.sleep(4000);

			String path4 = "//input[@name='freeSubmissionSubmit']";
			// Click on submit button
			WebElement submit2 = driver.findElement(By.xpath(path4));
			submit2.click();
			Thread.sleep(4000);

			Thread.sleep(4000);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
