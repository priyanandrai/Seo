package com.seo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.SearchEngine;

public interface SearchRepository extends CrudRepository<SearchEngine,Long> {

	List<SearchEngine> findTopByOrderByIdDesc();

	List<SearchEngine> findTop5ByOrderByIdDesc();

	
}