package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.Mywebsite;
import com.seo.repository.MywebsiteRepository;

@Service
public class MywebsiteService implements IMywebsiteService {
	
	@Autowired
	private MywebsiteRepository mywebsiteRepository;

	@Override
	public <S extends Mywebsite> S save(S entity) {
		// TODO Auto-generated method stub
		return mywebsiteRepository.save(entity);
	}

	@Override
	public <S extends Mywebsite> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Mywebsite> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Mywebsite> findAll() {
		// TODO Auto-generated method stub
		return mywebsiteRepository.findAll();
	}

	@Override
	public Iterable<Mywebsite> findAllById(Iterable<Long> ids) {
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
	public void delete(Mywebsite entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Mywebsite> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
