package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;
import org.openqa.selenium.JavascriptExecutor;


public class Secretsearchengine implements Interface {
	String website="http://www.secretsearchenginelabs.com/add-url.php";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException 
	{
		try {
			driver.get(website);

			((JavascriptExecutor) driver).executeScript("scroll(0,1200)");

			String path = "//input[@name='newurl']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getSubmiturl());

			// Click on submit button
			String path5 = "//html//body//center//table//tbody//tr//td//form//p//input";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
}
