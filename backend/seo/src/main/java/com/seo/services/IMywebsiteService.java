package com.seo.services;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.Mywebsite;

public interface IMywebsiteService extends CrudRepository<Mywebsite,Long> {

}
