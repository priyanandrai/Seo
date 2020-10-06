package com.seo.Process;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

import javax.swing.undo.AbstractUndoableEdit;

import org.springframework.core.env.Environment;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.seo.Automation.*;
import com.seo.Automation.Bookmarking.*;
import com.seo.Automation.Classified.*;
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
		
		SearchEngine searchEngine = new SearchEngine();
		try {
			//open browser set data in Data base 
			String virtualID = openBrowser();
			if(driver == null ) {
				new Seoexception("Error in opening Window Please try again ");
			};
			searchEngine.updataDatainDTO(this.processDTO,"In Progress", virtualID);
			searchEngineService.savedatail(searchEngine);
			
			// TODO
			ArrayList<Interface> arrayList = getListOfAllListOfAutomationClassAccordingtoProcess(processDTO);
		//	Thread.sleep(1000000);
			
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

		String task1 = "Search Engine Submission";
		String task2 = "Social Book Marketing";
		String task3 = "Classified Submission";
		/*
		 * need to Add all class for process and 
		 */
		
		System.out.println("processDTO2.getTasktype()"+ processDTO2.getTasktype());

		try {
			if(processDTO2.getTasktype().equalsIgnoreCase(task1)) {
				arrayList.add(new Activesearchresult());
				arrayList.add(new Addme());
				arrayList.add(new Addurl());
				arrayList.add(new Anoox());
				arrayList.add(new Anooxone());
				arrayList.add(new Aweber());
				arrayList.add(new Biotho());
				arrayList.add(new Entireweb());
				arrayList.add(new Exactseek());
				arrayList.add(new Freeweb());
				arrayList.add(new Freewebsubmission());
				arrayList.add(new Gigablast());
				arrayList.add(new Hotvsnot());
				arrayList.add(new Infotiger());
				arrayList.add(new Salouhoteles());
				arrayList.add(new Secretsearchenginelabs());
				arrayList.add(new Sitesondisplay());	
				arrayList.add(new Sonicrun());	
				arrayList.add(new Subjex());
				arrayList.add(new Submitstart());
				arrayList.add(new Viesearch());
				arrayList.add(new Whatuseek());
				arrayList.add(new Websquash());
				arrayList.add(new Secretsearchengine());
			
				
				
				
			}else if(processDTO2.getTasktype().equalsIgnoreCase(task2)) {
				arrayList.add(new Pligg());
				arrayList.add(new Mozylinks());
				arrayList.add(new Piggo());
				arrayList.add(new Diggo());
				arrayList.add(new News());
				arrayList.add(new Social());
				arrayList.add(new Digg());
				arrayList.add(new Submission());
				arrayList.add(new Stumble());
				arrayList.add(new Links());
				arrayList.add(new Bookmark());
			}
			else if (processDTO2.getTasktype().equalsIgnoreCase(task3)) {
				arrayList.add(new Qtellb2btrade());
				arrayList.add(new Qtellbuyandsell());
				arrayList.add(new Qtellclassifiedads());
				arrayList.add(new Qtellexpress());
				arrayList.add(new Qtellfreeclassifiedads());
				arrayList.add(new Qtellnet());
				arrayList.add(new Tendermeforfree());
				arrayList.add(new Wholesalefreeclassifiedads());
			}
		} catch (Exception e) {
			// TODO: handle exception
		}

System.out.println(arrayList.size());

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
		capabilities.setCapability("enableVNC", true);
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
