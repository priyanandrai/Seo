package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.Contactus;
import com.seo.repository.ContactusRepository;
import com.seo.repository.SubsribeRepository;

@Service
public class ContactusService implements IContactusSrevice{
	
	@Autowired
	private ContactusRepository contactusRepository;

	@Override
	public <S extends Contactus> S save(S entity) {
		// TODO Auto-generated method stub
		return contactusRepository.save(entity);
	}

	@Override
	public <S extends Contactus> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Contactus> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Contactus> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Contactus> findAllById(Iterable<Long> ids) {
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
	public void delete(Contactus entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Contactus> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
