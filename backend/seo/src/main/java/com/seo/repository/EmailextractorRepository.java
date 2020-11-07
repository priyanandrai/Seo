package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.Emailextractor;


@Repository
public interface EmailextractorRepository  extends CrudRepository<Emailextractor, Long>{

}
