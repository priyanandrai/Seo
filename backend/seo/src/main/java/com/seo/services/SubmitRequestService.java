package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.SubmitRequest;
import com.seo.repository.SubmitRequestRepository;

@Service
public class SubmitRequestService implements ISubmitRequestService {
	
	@Autowired
	private SubmitRequestRepository submitRequestRepository;

	@Override
	public <S extends SubmitRequest> S save(S entity) {
		// TODO Auto-generated method stub
		return submitRequestRepository.save(entity);
	}

	@Override
	public <S extends SubmitRequest> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<SubmitRequest> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<SubmitRequest> findAll() {
		// TODO Auto-generated method stub
		return submitRequestRepository.findAll();
	}

	@Override
	public Iterable<SubmitRequest> findAllById(Iterable<Long> ids) {
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
	public void delete(SubmitRequest entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends SubmitRequest> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
