package com.seo.Automation.Bookmarking;





import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;



public class Pligg implements Interface {
	String website = "https://pligg.wtguru.com/submit";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		
		try {
			driver.get(website);

			// fill the URL
			WebElement url1 = driver.findElement(By.xpath("//input[@placeholder='Story URL']"));
			url1.click();
			// sendurlintext1.clear();
			url1.sendKeys(dto.getSubmiturl());
			driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);

			// CLick on the submit Button
			WebElement submit = driver.findElement(By.xpath("//button[@class='btn']"));
			submit.click();
			driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);

			// Fill the title information
			WebElement tit = driver.findElement(By.xpath("//input[@placeholder='Story Title']"));
			tit.click();
			tit.clear();
			tit.sendKeys(dto.getTitle());

			// Fill the Describtion
			WebElement Desc = driver.findElement(By.xpath("//textarea[@name='storydesc']"));
			Desc.click();
			Desc.clear();
			Desc.sendKeys(dto.getDescription());

			// Fill the Tag information
			WebElement tags = driver.findElement(By.xpath("//input[@placeholder='Tags']"));
			tags.click();
			tags.clear();
			tags.sendKeys(dto.getKeyword());

			// CLick on next button
			WebElement nexts = driver.findElement(By.xpath("//button[@class='btn btn-primary btn-lg']"));
			nexts.click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			// CLick on Submit button
			WebElement Subs = driver.findElement(By.xpath("//button[@class='btn btn-primary']"));
			Subs.click();
			driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);


		}

		catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
