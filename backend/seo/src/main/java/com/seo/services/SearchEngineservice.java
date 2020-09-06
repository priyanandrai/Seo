package com.seo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seo.model.SearchEngine;
import com.seo.repository.SearchRepository;

@Component
public class SearchEngineservice {
	
	@Autowired
	private SearchRepository searchrepository;
	
	
	public void savedatail(SearchEngine searchengine) {
		
		this.searchrepository.save(searchengine);
		
	}
	

}
