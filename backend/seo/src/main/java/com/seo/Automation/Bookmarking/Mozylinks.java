package com.seo.Automation.Bookmarking;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Mozylinks implements Interface{
	String website = "https://www.mozylinks.com/";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		try {
			driver.get(website);

			// Fill url in text box
			WebElement url = driver.findElement(By.xpath("//input[@placeholder='url / keywords']"));
			url.click();
			url.sendKeys(dto.getSubmiturl());
			driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);

			// click on submit button
			WebElement sbmit = driver.findElement(By.xpath("//button[@class='btn btn-secondary btn-md m-0']"));
			sbmit.click();
			driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);

//			// Assertion for completion record
//			Assert.assertTrue(driver.getPageSource().contains("s"));

		}

		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
