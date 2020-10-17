package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.Contactus;

@Repository
public interface ContactusRepository  extends CrudRepository<Contactus, Long>{

}
