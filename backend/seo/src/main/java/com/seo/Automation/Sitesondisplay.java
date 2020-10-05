package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Sitesondisplay implements Interface {
	String website="https://www.sitesondisplay.com/add.html";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException 
	{
		try {
			driver.get(website);

			// Fill the url
			String path = "//input[@id='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			// Fill the email id
			String path2 = "//body//input[2]";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);

			// Fill the name
			String path3 = "//body//input[3]";
			WebElement sendname = driver.findElement(By.xpath(path3));
			sendname.click();
			sendname.sendKeys(dto.getName());
			Thread.sleep(4000);

			// click on the agree box
			String path4 = "//input[@id='Agreed to Terms']";
			WebElement tikbutton = driver.findElement(By.xpath(path4));
			tikbutton.click();
			Thread.sleep(4000);
			// Click on submit button
			String path5 = "//input[@class='default-btn btn']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

			// Store the current window handle
			String winHandleBefore = driver.getWindowHandle();

			// Switch to new window opened
			for (String winHandle : driver.getWindowHandles()) {
				driver.switchTo().window(winHandle);
			}

			// Perform the actions on new window

			// Close the new window, if that window no more required
			driver.close();

			// Switch back to original browser (first window)
			driver.switchTo().window(winHandleBefore);

			Thread.sleep(4000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
}



