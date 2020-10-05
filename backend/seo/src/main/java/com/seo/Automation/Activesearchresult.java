package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Activesearchresult implements Interface {
	String website="https://www.activesearchresults.com/addwebsite.php";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException {
		try {
			driver.get(website);

			// Enter the url
			String path = "//input[@name='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			String path2 = "//input[@name='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);

			String path3 = "//input[@name='submiturl']";
			// Click on submit button
			WebElement submit2 = driver.findElement(By.xpath(path3));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}	
		
		
	}
}

