
package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Viesearch implements Interface {
	String website="https://viesearch.com/";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException {
		
		try {
			driver.get(website);

			// CLick on the URL text box
			String path = "//input[@id='vie_search']";
			WebElement urlintext = driver.findElement(By.xpath(path));
			urlintext.click();
			urlintext.sendKeys(dto.getSubmiturl());
			Thread.sleep(4000);

			String path1 = "//form[@name='vie_topsearch']//button[@class='vie_button vie_button_theme'][contains(text(),'Submit')]";
			// Click on the Submit Button
			WebElement clickonsubmits = driver.findElement(By.xpath(path1));
			clickonsubmits.click();
			Thread.sleep(4000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
