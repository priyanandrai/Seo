
package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Hotvsnot implements Interface {
	String website="http://hotvsnot.com/addurl/Add-Url.aspx?c=2918";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException 
	{
		try {
			driver.get(website);

			// Fill the url
			String path = "//input[@id='tbUrl']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			// Fill the name
			String path3 = "//input[@id='tbFullname']";
			WebElement sendname = driver.findElement(By.xpath(path3));
			sendname.click();
			sendname.sendKeys(dto.getName());

			// Fill the email id
			String path2 = "//input[@id='tbEmail']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			// Thread.sleep(3000);

			// click on the agree box
			String path4 = "//input[@id='tbNews']";
			WebElement tikbutton = driver.findElement(By.xpath(path4));
			tikbutton.click();

			// Click on submit button
			String path5 = "//input[@id='btnContinue']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
	
		
		
	}
}
