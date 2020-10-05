package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.JavascriptExecutor;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Aweber implements Interface{

	String website  = "https://www.aweber.com/";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
	try {
		driver.get(website);

		((JavascriptExecutor) driver).executeScript("scroll(0,1200)");

		// CLick on the URL text box
		// String path = "//input[@name='URL']";
		String path = "//input[@id='query']";
		WebElement urlintext = driver.findElement(By.xpath(path));
		urlintext.click();
		urlintext.sendKeys(dto.getSubmiturl());
		Thread.sleep(4000);

		String path1 = "//button[@class='btn btn--primary']//*[local-name()='svg']";
		// Click on the Submit Button
		WebElement clickonsubmits = driver.findElement(By.xpath(path1));
		clickonsubmits.click();
		Thread.sleep(4000);
	} catch (Exception e) {
		// TODO: handle exception
	}
		
	}

}
