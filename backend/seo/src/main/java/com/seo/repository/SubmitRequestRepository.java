package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.SubmitRequest;

@Repository
public interface SubmitRequestRepository extends CrudRepository<SubmitRequest, Long> {

}
