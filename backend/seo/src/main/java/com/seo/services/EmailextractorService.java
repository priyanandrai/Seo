package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.Emailextractor;
import com.seo.repository.EmailextractorRepository;

@Service
public class EmailextractorService implements IEmailextractorService
{
		
	@Autowired
	private EmailextractorRepository EmailextractorRepository;
	
	@Override
	public <S extends Emailextractor> S save(S entity) {
		// TODO Auto-generated method stub
		return EmailextractorRepository.save(entity);
	}

	@Override
	public <S extends Emailextractor> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Emailextractor> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Emailextractor> findAll() {
		// TODO Auto-generated method stub
		return EmailextractorRepository.findAll();
	}

	@Override
	public Iterable<Emailextractor> findAllById(Iterable<Long> ids) {
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
	public void delete(Emailextractor entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Emailextractor> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
