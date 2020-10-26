package com.seo.controller;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seo.model.TrafficExchange;
import com.seo.model.YouTubeViews;
import com.seo.services.IYouTubeViewsService;

@RestController
public class YouTubeViewService {
	
	@Autowired
	IYouTubeViewsService iYouTubeViewsService;

	@CrossOrigin(origins = "*")
	@GetMapping("/getyoutubelist")
	public Iterable<YouTubeViews> getyoutubelist() {
		System.out.println("I am coming here ");
		return iYouTubeViewsService.findAll();
	}	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveyoutubeUrl")
	public String saveUrl(@RequestBody YouTubeViews youTubeViews ) {
		try {
			Iterator<YouTubeViews> iterable = iYouTubeViewsService.findAll().iterator();
			while(iterable.hasNext()){
				YouTubeViews youtubeViews2 = iterable.next();
				if(youtubeViews2.getUrl() != null && youtubeViews2.getUrl().equalsIgnoreCase(youTubeViews.getUrl())) {
					return youtubeViews2.toString();
				}
			}
			iYouTubeViewsService.save(youTubeViews);
			return youTubeViews.toString();
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getpersoninformation")
	public String getpersoninformation(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<YouTubeViews> iterable = iYouTubeViewsService.findAll().iterator();
			while(iterable.hasNext()){
				YouTubeViews youTubeViews = iterable.next();
				if(youTubeViews.getUrl() != null && youTubeViews.getUrl().equalsIgnoreCase(url)) {
					return youTubeViews.toString();
				}
			}
			return "{\"messgae\":\"No information exist\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/updateCountviews")
	public String updateCountviews(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<YouTubeViews> iterable = iYouTubeViewsService.findAll().iterator();
			while(iterable.hasNext()){
				YouTubeViews youTubeViews = iterable.next();
				if(youTubeViews.getUrl() != null && youTubeViews.getUrl().equalsIgnoreCase(url)) {
					youTubeViews.setRemaining_balance_views(youTubeViews.getRemaining_balance_views()+1);
					 iYouTubeViewsService.save(youTubeViews);
					 break;
				}
			}
			return "{\"messgae\":\"Views Updated Sucessfully\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/updatearchivedviews")
	public String updatearchivedhit(@RequestParam(defaultValue = "") String url ) {
		try {
			Iterator<YouTubeViews> iterable = iYouTubeViewsService.findAll().iterator();
			while(iterable.hasNext()){
				YouTubeViews youTubeViews = iterable.next();
				System.out.println("youTubeViews.getUrl() "+ youTubeViews.getUrl());
				System.out.println("url "+ url);
				if(youTubeViews.getUrl() != null && youTubeViews.getUrl().equalsIgnoreCase(url)) {
					youTubeViews.setArchieved_views(youTubeViews.getArchieved_views()+1);
					youTubeViews.setRemaining_balance_views(youTubeViews.getRemaining_balance_views()-1);
					iYouTubeViewsService.save(youTubeViews);
					 break;
				}
			}
			return "{\"messgae\":\"Views Updated Sucessfully\"}";
		} catch (Exception e) {
			return "{\"messgae\":\"Sorry . something worng went worng on your end\"}";
		}
	}
}
