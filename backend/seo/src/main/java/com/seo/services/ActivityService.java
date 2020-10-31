package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.Activity;
import com.seo.repository.ActivityRepository;

@Service
public class ActivityService implements IActivityService {
	
	@Autowired
	private ActivityRepository  activityRepository;

	@Override
	public <S extends Activity> S save(S entity) {
		// TODO Auto-generated method stub
		return activityRepository.save(entity) ;
	}

	@Override
	public <S extends Activity> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Activity> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Activity> findAll() {
		// TODO Auto-generated method stub
		return activityRepository.findAll();
	}

	@Override
	public Iterable<Activity> findAllById(Iterable<Long> ids) {
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
	public void delete(Activity entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Activity> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
