package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.Mywebsite;

@Repository
public interface MywebsiteRepository extends CrudRepository<Mywebsite,Long> {

}
