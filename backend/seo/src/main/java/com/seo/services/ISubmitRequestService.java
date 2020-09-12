package com.seo.services;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.SubmitRequest;

public interface ISubmitRequestService extends CrudRepository<SubmitRequest, Long> {

}
