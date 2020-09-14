package com.seo.services;

import java.util.List;

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
	
	public List<SearchEngine> findAlldetail() {
		List<SearchEngine> list =(List<SearchEngine>)this.searchrepository.findAll();
		return list;
	}

	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		searchrepository.deleteById(id);
	}
	

}
