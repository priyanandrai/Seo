package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Addurl implements Interface {
	String website="\"http://www.gigablast.com/addurl";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) {
		
		try {
			driver.get(website);

			String path = "//input[@name='q']";
			WebElement urlintext = driver.findElement(By.xpath(path));

			urlintext.click();
			urlintext.sendKeys(dto.getSubmiturl());
			Thread.sleep(4000);
			String path1 = "//input[@class='gsc-search-button']";
			// Click on the Submit Button
			WebElement clickonsubmits = driver.findElement(By.xpath(path1));
			clickonsubmits.click();
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
