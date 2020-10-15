package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.Subsribe;
import com.seo.repository.SubsribeRepository;

@Service
public class SubsribeService implements ISubsribeService {
	
	@Autowired
	private SubsribeRepository subscribeRepository;
	
	@Override
	public <S extends Subsribe> S save(S entity) {
		// TODO Auto-generated method stub
		return subscribeRepository.save(entity);
	}

	@Override
	public <S extends Subsribe> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Subsribe> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Subsribe> findAll() {
		// TODO Auto-generated method stub
		return subscribeRepository.findAll();
	}

	@Override
	public Iterable<Subsribe> findAllById(Iterable<Long> ids) {
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
	public void delete(Subsribe entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Subsribe> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
