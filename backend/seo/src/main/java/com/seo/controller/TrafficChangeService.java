package com.seo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.seo.model.Subsribe;
import com.seo.model.TrafficExchange;
import com.seo.services.ITrafficExchange;

@RestController
public class TrafficChangeService {
	
	@Autowired
	ITrafficExchange iTrafficExchange;
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/gettrafficlist")
	public Iterable<TrafficExchange> gettrafficlist() {
		System.out.println("I am coming here ");
		return iTrafficExchange.findAll();
	}	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveUrl")
	public String saveUrl(@RequestBody TrafficExchange trafficExchange ) {
		try {
			iTrafficExchange.save(trafficExchange);
			return "true";
		} catch (Exception e) {
			return "false";
		}


	}	

}
