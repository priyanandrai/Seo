package com.erpo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.DoctorInfo;
import com.erpo.repository.DoctorInfoRepository;

@Service
public class DoctorInfoService implements IDoctorInfoService {

	
	@Autowired
	private DoctorInfoRepository doctorInfoRepository;
	
	@Override
	public <S extends DoctorInfo> S save(S entity) {
		// TODO Auto-generated method stub
		return doctorInfoRepository.save(entity);
	}

	@Override
	public <S extends DoctorInfo> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<DoctorInfo> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<DoctorInfo> findAll() {
		// TODO Auto-generated method stub
		return doctorInfoRepository.findAll();
	}

	@Override
	public Iterable<DoctorInfo> findAllById(Iterable<Long> ids) {
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
	public void delete(DoctorInfo entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends DoctorInfo> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
