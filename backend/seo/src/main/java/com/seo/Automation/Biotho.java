package com.seo.Automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Biotho implements Interface {
	String website = "http://boitho.com/addyourlink.htm.en";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) {
		
		try {
			driver.get(website);

			// Fill the url
			WebElement sendurlintext1 = driver.findElement(By.xpath("//input[@name='url']"));
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());
			// Fill the email id
			WebElement sendemailid = driver.findElement(By.xpath("//input[@name='mail']"));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			// Click on submit button
			WebElement submit2 = driver.findElement(By.xpath("//input[@name='Submit2']"));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
