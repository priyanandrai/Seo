package com.seo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seo.model.YouTubeViews;
import com.seo.repository.YouTubeViewsRepository;

@Service
public class YouTubeViewsService implements IYouTubeViewsService {

	
	@Autowired
	private YouTubeViewsRepository  youTubeViewsRepository;
	
	
	@Override
	public <S extends YouTubeViews> S save(S entity) {
		// TODO Auto-generated method stub
		return youTubeViewsRepository.save(entity);
	}

	@Override
	public <S extends YouTubeViews> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<YouTubeViews> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<YouTubeViews> findAll() {
		// TODO Auto-generated method stub
		return youTubeViewsRepository.findAll();
	}

	@Override
	public Iterable<YouTubeViews> findAllById(Iterable<Long> ids) {
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
	public void delete(YouTubeViews entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends YouTubeViews> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
