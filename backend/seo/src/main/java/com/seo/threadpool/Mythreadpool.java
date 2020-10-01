package com.seo.threadpool;


import java.net.MalformedURLException;
import java.text.SimpleDateFormat;  
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import com.seo.Automation.SearchEngineSubmisson;
import com.seo.model.SearchEngine;
import com.seo.services.ISignUpService; 

  
// Task class to be executed (Step 1) 
 public class Mythreadpool implements Runnable    
{ 
	 @Autowired
	 SearchEngine searchengine;
	 
	 
    private String name; 
 	String Submiturl = "http://localhost:3000/";
	String EmailAddress ="shashank@gmail.com";
      
    public Mythreadpool(String s) 
    { 
        name = s; 
    } 
      
    // Prints task name and sleeps for 1s 
    // This Whole process is repeated 5 times 
    public void run() 
    { 
        try
        { 
            for (int i = 0; i<=5; i++) 
            { 
                if (i==0) 
                {
                	
                	Date d = new Date(); 
                    SimpleDateFormat ft = new SimpleDateFormat("hh:mm:ss"); 
                    System.out.println("Initialization Time for"+ " task name - "+ name +" = " +ft.format(d));                                     
                    SearchEngineSubmisson search = new SearchEngineSubmisson();
    				try {
    					System.out.println("---1---");
    					System.out.println("My visual Id : "+search.openBrowser());
						//(JavascriptExecutor.executeScript("scroll(0,400)");
						SearchEngineSubmisson.anoox("http://anoox.com/add_for_indexing_free.php", Submiturl, EmailAddress);
						System.out.println("---2---");
					} catch (MalformedURLException e) {
						
						e.printStackTrace();
					} 
    			           
                } 
                else
                { 
                    Date d = new Date(); 
                    SimpleDateFormat ft = new SimpleDateFormat("hh:mm:ss"); 
                    System.out.println("Executing Time for task name - "+ 
                            name +" = " +ft.format(d));    
          
                } 
                Thread.sleep(1000); 
            } 
            System.out.println(name+" complete"); 
        } 
          
        catch(InterruptedException e) 
        { 
            e.printStackTrace(); 
        } 
    } 
} 
