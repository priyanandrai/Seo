package com.seo.repository;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.SearchEngine;

public interface SearchRepository extends CrudRepository<SearchEngine,Long> {

	
}