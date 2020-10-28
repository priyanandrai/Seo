package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mywebsite")
public class Mywebsite {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String user_id;
	private String url;
	public Mywebsite(Long id, String user_id, String url) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.url = url;
	}
	
	public Mywebsite() {
		
	}

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"user_id\":\"" + user_id + "\", \"url\":\"" + url + "\"}";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
