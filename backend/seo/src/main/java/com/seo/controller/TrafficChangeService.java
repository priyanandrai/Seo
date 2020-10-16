package com.seo.controller;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seo.model.SignUp;
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
			Iterator<TrafficExchange> iterable = iTrafficExchange.findAll().iterator();
			while(iterable.hasNext()){
				TrafficExchange trafficExchange2 = iterable.next();
				if(trafficExchange2.getUrl() != null && trafficExchange2.getUrl().equalsIgnoreCase(trafficExchange.getUrl())) {
					return trafficExchange2.toString();
				}
			}
			iTrafficExchange.save(trafficExchange);
			return trafficExchange.toString();
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getclientinformation")
	public String getclientinformation(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<TrafficExchange> iterable = iTrafficExchange.findAll().iterator();
			while(iterable.hasNext()){
				TrafficExchange trafficExchange2 = iterable.next();
				if(trafficExchange2.getUrl() != null && trafficExchange2.getUrl().equalsIgnoreCase(url)) {
					return trafficExchange2.toString();
				}
			}
			return "{\"messgae\":\"No information exist\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/updateCount")
	public String updateCount(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<TrafficExchange> iterable = iTrafficExchange.findAll().iterator();
			while(iterable.hasNext()){
				TrafficExchange trafficExchange2 = iterable.next();
				if(trafficExchange2.getUrl() != null && trafficExchange2.getUrl().equalsIgnoreCase(url)) {
					 trafficExchange2.setCount_remaining(trafficExchange2.getCount_remaining()+1);
					 iTrafficExchange.save(trafficExchange2);
					 break;
				}
			}
			return "{\"messgae\":\"Count Updated Sucessfully\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/updatehit")
	public String updatehit(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<TrafficExchange> iterable = iTrafficExchange.findAll().iterator();
			while(iterable.hasNext()){
				TrafficExchange trafficExchange2 = iterable.next();
				if(trafficExchange2.getUrl() != null && trafficExchange2.getUrl().equalsIgnoreCase(url)) {
					 trafficExchange2.setCount_hit(trafficExchange2.getCount_hit()+1);
					 trafficExchange2.setCount_remaining(trafficExchange2.getCount_remaining()-1);
					 iTrafficExchange.save(trafficExchange2);
					 break;
				}
			}
			return "{\"messgae\":\"Count Updated Sucessfully\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
}
