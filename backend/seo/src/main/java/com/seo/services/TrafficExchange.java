package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.seo.repository.TrafficExchnageRepository;

@Service
public class TrafficExchange implements ITrafficExchange {

	@Autowired
	private TrafficExchnageRepository trafficExchnageRepository;
	
	@Override
	public <S extends com.seo.model.TrafficExchange> S save(S entity) {
		// TODO Auto-generated method stub
		return trafficExchnageRepository.save(entity);
	}

	@Override
	public <S extends com.seo.model.TrafficExchange> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<com.seo.model.TrafficExchange> findById(Long id) {
		// TODO Auto-generated method stub
		return trafficExchnageRepository.findById(id);
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<com.seo.model.TrafficExchange> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<com.seo.model.TrafficExchange> findAllById(Iterable<Long> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(com.seo.model.TrafficExchange entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends com.seo.model.TrafficExchange> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}
	
}
