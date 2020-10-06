package com.seo.Automation.Classified;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class Tendermeforfree implements Interface{
	String website = "http://www.tendermeforfree.com/index.php?view=post&cityid=192&lang=en&catid=17&subcatid=925&shortcutregion=0";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		try {
			driver.get(website);

			((JavascriptExecutor) driver).executeScript("scroll(0,300)");

			// fill the title
			WebElement tit = driver.findElement(By.xpath("//input[@id='adtitle']"));
			tit.clear();
			tit.sendKeys(dto.getTitle());

			// For description
			WebElement descri = driver.findElement(By.xpath("//textarea[@id='wmd-input']"));
			descri.click();
			descri.sendKeys(dto.getDescription());
			Thread.sleep(3000);
			((JavascriptExecutor) driver).executeScript("scroll(0,900)");
			Thread.sleep(4000);

			// for email id
			WebElement email = driver.findElement(By.xpath("//input[@id='email']"));
			email.click();
			email.clear();
			email.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);

			// ((JavascriptExecutor) driver).executeScript("scroll(0,200)");

//			String captchaVal = JOptionPane.showInputDialog("Please enter the captcha value:");
//			Thread.sleep(4000);
//			// Fill the captcha value
//			WebElement Secu = driver.findElement(By.xpath("//input[@name='captcha']"));
//			Secu.sendKeys(captchaVal);
//			// System.out.println(secu);
//			Thread.sleep(4000);

			// For the captcha code filling popup
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.promptResponse = prompt(\"Please enter captcha\");");
			Thread.sleep(25000);
			String ret = (String) js.executeScript("return window.promptResponse;");
			System.out.println(ret);
			driver.findElement(By.xpath("//input[@name='captcha']")).sendKeys(ret);

			((JavascriptExecutor) driver).executeScript("scroll(0,1900)");

			// Click on Post now button
			WebElement post = driver.findElement(By.xpath("//button[contains(text(),'Post Now')]"));
			post.click();
			Thread.sleep(3000);

			// For assertion
			// Assert.assertTrue(driver.getPageSource().contains("ad"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
