package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;
import org.openqa.selenium.JavascriptExecutor;

public class Infotiger implements Interface{
	String website  = "http://www.infotiger.com/addurl.html";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) {
		try {
			driver.get(website);

			((JavascriptExecutor) driver).executeScript("scroll(0,400)");

			String path = "//input[@name='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			String path2 = "//input[@name='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			((JavascriptExecutor) driver).executeScript("scroll(0,400)");
			Thread.sleep(4000);

			String path3 = "/html[1]/body[1]/center[1]/table[7]/tbody[1]/tr[1]/td[1]/font[1]/input[4]";

			// Click on submit button
			WebElement submit2 = driver.findElement(By.xpath(path3));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
