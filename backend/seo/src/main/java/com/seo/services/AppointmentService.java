package com.erpo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.Appointment;
import com.erpo.repository.AppointmentRepository;
import com.erpo.repository.MessageRepository;

@Service
public class AppointmentService implements IAppointmentService{

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public <S extends Appointment> S save(S entity) {
		// TODO Auto-generated method stub
		return appointmentRepository.save(entity);
	}

	@Override
	public <S extends Appointment> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Appointment> findById(Long id) {
		// TODO Auto-generated method stub
		return appointmentRepository.findById(id);
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return appointmentRepository.existsById(id);
	}

	@Override
	public Iterable<Appointment> findAll() {
		// TODO Auto-generated method stub
		return appointmentRepository.findAll();
	}

	@Override
	public Iterable<Appointment> findAllById(Iterable<Long> ids) {
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
	public void delete(Appointment entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Appointment> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
