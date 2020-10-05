package com.seo.Automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import com.seo.Interface.Interface;
import com.seo.Process.ProcessDTO;

public class Anoox implements Interface {
	String website="http://anoox.com/add_for_indexing_free.php";
	@Override
	public void StartAutomation(ProcessDTO dto, RemoteWebDriver driver) {
		
		try {
			
			driver.get(website);

			Thread.sleep(4000);

			// Fill the url
			String path = "//input[@name='url']";
			WebElement sendurlintext1 = driver.findElement(By.xpath(path));
			sendurlintext1.click();
			sendurlintext1.sendKeys(dto.getSubmiturl());
			Thread.sleep(4000);
			// Fill the email id
			String path2 = "//input[@name='email']";
			WebElement sendemailid = driver.findElement(By.xpath(path2));
			sendemailid.click();
			sendemailid.sendKeys(dto.getEmailaddress());
			Thread.sleep(4000);

			// click on the agree box
			String path4 = "//input[@name='check_terms']";
			WebElement tikbutton = driver.findElement(By.xpath(path4));
			tikbutton.click();
			Thread.sleep(4000);

			// Click on submit button
			String path5 = "//form[@name='frm']//input[@name='submit']";
			WebElement submit2 = driver.findElement(By.xpath(path5));
			submit2.click();
			Thread.sleep(4000);

			//Assert.assertTrue(driver.getPageSource().contains("Sub"));
			//System.out.println("Anoox Assert successfully pass");
			Thread.sleep(4000);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}

}
