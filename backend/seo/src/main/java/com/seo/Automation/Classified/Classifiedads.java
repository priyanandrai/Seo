package com.seo.Automation.Classified;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;


public class Classifiedads implements Interface{
	String website = "https://www.classifiedads.com/";
	String state = "UP";
	String city = "Meerut";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		try {
			driver.get(website);

			// Click the add post
			WebElement tit2 = driver.findElement(By.xpath("//a[contains(text(),'Post an ad')]"));
			tit2.click();

			// Select the Categories

			Select dropdown = new Select(driver.findElement(By.xpath("//select[@id='category']")));
			dropdown.selectByVisibleText("Services");
			Thread.sleep(3000);

			// Select Sub Categories
			Select subdropdown = new Select(driver.findElement(By.xpath("//select[@id='subcategory']")));
			subdropdown.selectByVisibleText("Web Design & Tech");
			//// option[contains(text(),'Web Design & Tech')]
			Thread.sleep(3000);

			// for State
			WebElement locat = driver.findElement(By.xpath("//input[@id='location']"));
			locat.click();
			locat.clear();
			locat.sendKeys(state);
			Thread.sleep(10000);

			// fill the title
			WebElement tit = driver.findElement(By.xpath("//input[@name='title']"));
			tit.sendKeys(dto.getTitle());

			// For description
			WebElement descri = driver
					.findElement(By.xpath("//body[@class='cke_editable cke_editable_themed cke_contents_ltr']//p"));
			descri.click();
			descri.sendKeys(dto.getDescription());
			Thread.sleep(5000);
			((JavascriptExecutor) driver).executeScript("scroll(0,200)");

			// For Name
			WebElement naam = driver.findElement(By.xpath("//input[@name='fname']"));
			naam.click();
			naam.sendKeys(dto.getName());
			Thread.sleep(5000);

			// for email id
			WebElement email = driver.findElement(By.xpath("//input[@name='email']"));
			email.click();
			email.clear();
			email.sendKeys(dto.getEmailaddress());
			Thread.sleep(5000);

			// for email id
			WebElement email2 = driver.findElement(By.xpath("//input[@name='email2']"));
			email2.click();
			email2.clear();
			email2.sendKeys(dto.getEmailaddress());
			Thread.sleep(5000);
			((JavascriptExecutor) driver).executeScript("scroll(0,400)");

			// for State
			WebElement stat = driver.findElement(By.xpath("//input[@name='city']"));
			stat.click();
			stat.clear();
			stat.sendKeys(city);
			Thread.sleep(5000);

//			String captchaVal = JOptionPane.showInputDialog("Please enter the captcha value:");
//			Thread.sleep(5000);
//			// Fill the captcha value
//			WebElement Secu = driver.findElement(By.xpath("//input[@name='captchacode']"));
//			Secu.sendKeys(captchaVal);
//			// System.out.println(secu);
//			Thread.sleep(4000);

			// For the captcha code filling popup
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.promptResponse = prompt(\"Please enter captcha\");");
			Thread.sleep(25000);
			String ret = (String) js.executeScript("return window.promptResponse;");
			System.out.println(ret);
			driver.findElement(By.xpath("//input[@name='captchacode']")).sendKeys(ret);

//			// Click on select I Agree button
//			WebElement selec = driver.findElement(By.xpath(""));
//			selec.click();
//			Thread.sleep(3000);
			((JavascriptExecutor) driver).executeScript("scroll(0,200)");

			// Click on Post now button
			WebElement post = driver.findElement(By.xpath("//a[@class='flat']"));
			post.click();
			Thread.sleep(3000);

			// For assertion
			// Assert.assertTrue(driver.getPageSource().contains("ad"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
