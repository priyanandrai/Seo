package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.Subsribe;



@Repository
public interface SubsribeRepository  extends CrudRepository<Subsribe, Long> {

}
