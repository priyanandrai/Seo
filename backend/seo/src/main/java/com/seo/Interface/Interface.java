package com.seo.Interface;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.seo.Process.ProcessDTO;

public interface Interface {
	
	public void StartAutomation(ProcessDTO dto , RemoteWebDriver driver) throws InterruptedException;

}
