package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.Activity;

@Repository
public interface ActivityRepository extends CrudRepository<Activity,Long> {

}
