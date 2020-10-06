package com.seo.Automation.Classified;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;
import org.openqa.selenium.JavascriptExecutor;

public class Classified4free implements Interface {
	String website = "http://classified4free.net/index.php?view=post&postevent=&cityid=536&lang=en&catid=3&subcatid=24";
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) throws InterruptedException{
		try {
			driver.get(website);

			WebElement tit = driver.findElement(By.xpath("//input[@id='adtitle']"));
			tit.clear();
			tit.sendKeys(dto.getTitle());

			WebElement descri = driver.findElement(By.xpath("//textarea[@id='wmd-input']"));
			descri.click();
			descri.sendKeys(dto.getDescription());
			Thread.sleep(5000);
			((JavascriptExecutor) driver).executeScript("scroll(0,200)");

			WebElement email = driver.findElement(By.xpath("//input[@id='email']"));
			email.click();
			email.clear();
			email.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);
			((JavascriptExecutor) driver).executeScript("scroll(0,800)");

			// For the captcha code filling popup
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.promptResponse = prompt(\"Please enter captcha\");");
			Thread.sleep(25000);
			String ret = (String) js.executeScript("return window.promptResponse;");
			System.out.println(ret);
			driver.findElement(By.xpath("//input[@name='captcha']")).sendKeys(ret);


			WebElement selec = driver.findElement(By.xpath("//input[@name='agree']"));
			selec.click();
			Thread.sleep(3000);
			((JavascriptExecutor) driver).executeScript("scroll(0,200)");

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
