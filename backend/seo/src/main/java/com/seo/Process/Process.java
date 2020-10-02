package com.seo.Process;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

import org.springframework.core.env.Environment;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seo.Exception.Seoexception;
import com.seo.Interface.Interface;
import com.seo.controller.ApplicationContextHolder;
import com.seo.model.SearchEngine;
import com.seo.services.SearchEngineservice;

@Component
public class Process implements Callable<ProcessOutput>{

	ProcessDTO processDTO = null;
	RemoteWebDriver driver = null;
	

	public Process(ProcessDTO processDTO ) throws Exception{
		try {
		
			//validateProcessDto(processDTO);
			this.processDTO = processDTO;
		
		} catch (Exception e) {
			throw e;
		}
		
	}
	
	private void validateProcessDto(ProcessDTO processDTO2)throws Exception {
		try {
		 new Seoexception("Need to validate data befor submission");
		} catch (Exception e) {
			throw e;
		}
		
	}

	@Override
	public ProcessOutput call() {
		
		SearchEngineservice searchEngineService = ApplicationContextHolder.getContext().getBean(SearchEngineservice.class);
//		ProcessOutput output = new ProcessOutput();
		
		System.out.println("going to start Thread");
		SearchEngine searchEngine = new SearchEngine();
		System.out.println("going to start Thread   12122");
		try {
			//open browser set data in Data base 
			String virtualID = openBrowser();
			System.out.println("driver    "+ driver);
			System.out.println("virtualID    "+ virtualID);
			if(driver == null ) {
				new Seoexception("Error in opening Window Please try again ");
			};
			searchEngine.updataDatainDTO(this.processDTO,"In Progress", virtualID);
			searchEngineService.savedatail(searchEngine);
			
			ArrayList<Interface> arrayList = getListOfAllListOfAutomationClassAccordingtoProcess(processDTO);
			Thread.sleep(1000000);
			
			for (int i = 0; i < arrayList.size(); i++) {
				arrayList.get(i).StartAutomation(processDTO, driver);
			}
			searchEngine.setTaskstatus("Completed");
			searchEngineService.savedatail(searchEngine);
			
			
		} catch (Exception e) {
			//output.setError(e.getMessage());
			e.printStackTrace();
			searchEngine.setTaskstatus("Error in completing task ");
		}
		updateDatainDataBasewithOutput(searchEngine, searchEngineService);
		
		return null;
	}

	private ArrayList<Interface> getListOfAllListOfAutomationClassAccordingtoProcess(ProcessDTO processDTO2) {
		ArrayList<Interface> arrayList = new ArrayList<Interface>(); 
		/*
		 * need to Add all class for process and 
		 */
		try {
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return arrayList;
	}
	private void updateDatainDataBasewithOutput(SearchEngine output , SearchEngineservice searchEngineService) {
		try {
			searchEngineService.savedatail(output);
		} catch (Exception e) {
			// TODO: handle exception
		}

	}
	
	
	private String openBrowser() throws Exception {

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setBrowserName("chrome");
		capabilities.setVersion("84.0");
		capabilities.setCapability("enableVNC", false);
		capabilities.setCapability("enableVideo", true);
		
		Environment environment = ApplicationContextHolder.getContext().getBean(Environment.class);
		String url = environment.getProperty("browser.ip");
		
		driver = new RemoteWebDriver(URI.create(url).toURL(),
				capabilities);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
		
		ChromeOptions op = new ChromeOptions();
	       op.setExperimentalOption("useAutomationExtension", false);
	       op.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
	       
	       return driver.getSessionId().toString();
	}


}
