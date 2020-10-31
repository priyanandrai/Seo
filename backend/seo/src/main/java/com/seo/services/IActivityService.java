package com.seo.services;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.Activity;

public interface IActivityService  extends CrudRepository<Activity,Long> {

}
