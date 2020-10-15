package com.seo.services;


import org.springframework.data.repository.CrudRepository;

import com.seo.model.Subsribe;
import com.seo.model.TrafficExchange;
import com.seo.repository.TrafficExchnageRepository;

public interface ITrafficExchange   extends CrudRepository<TrafficExchange, Long> {

}
