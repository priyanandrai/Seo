package com.seo.Automation;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class Salouhoteles implements Interface{
	String website  = "http://www.salouhoteles.org/en/";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		try {
			driver.get(website);
			((JavascriptExecutor) driver).executeScript("scroll(0,800)");
			// fill the url
			WebElement sendurlintext1 = driver.findElement(By.xpath("//input[@id='email']"));
			// sendurlintext1.click();
			sendurlintext1.clear();
			sendurlintext1.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);
			// Click on submit button
			WebElement submit2 = driver.findElement(
					By.xpath("//label[@class='form__label']//button[@class='form__submit']//*[local-name()='svg']"));
			submit2.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
