package com.seo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.seo.model.YouTubeViews;

@Repository
public interface YouTubeViewsRepository extends CrudRepository<YouTubeViews,Long> {

}
