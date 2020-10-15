package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.TrafficExchange;

@Repository
public interface TrafficExchnageRepository extends CrudRepository<TrafficExchange, Long> {

}
