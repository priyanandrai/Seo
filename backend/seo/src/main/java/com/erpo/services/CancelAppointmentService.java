package com.erpo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.CancelAppointment;
import com.erpo.repository.CancelAppointmentRepository;

@Service
public class CancelAppointmentService implements ICancelAppointmentService {

	@Autowired
	private CancelAppointmentRepository cancelAppointmentRepository;
	
	@Override
	public <S extends CancelAppointment> S save(S entity) {
		// TODO Auto-generated method stub
		return cancelAppointmentRepository.save(entity);
	}

	@Override
	public <S extends CancelAppointment> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<CancelAppointment> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<CancelAppointment> findAll() {
		// TODO Auto-generated method stub
		return cancelAppointmentRepository.findAll();
	}

	@Override
	public Iterable<CancelAppointment> findAllById(Iterable<Long> ids) {
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
	public void delete(CancelAppointment entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends CancelAppointment> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
