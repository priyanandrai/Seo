package com.seo.services;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.YouTubeViews;

public interface IYouTubeViewsService extends CrudRepository<YouTubeViews,Long> {

}
