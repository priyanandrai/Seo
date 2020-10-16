package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="traffic")
public class TrafficExchange {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String url;

	private long count_remaining;

	private long count_hit;
	
	private String user_id;

	private String user_type;
	
	public TrafficExchange() {
		
	}

	public TrafficExchange(long id, String url, long count_remaining, long count_hit, String user_id,
			String user_type) {
		super();
		this.id = id;
		this.url = url;
		this.count_remaining = count_remaining;
		this.count_hit = count_hit;
		this.user_id = user_id;
		this.user_type = user_type;
	}

	@Override
	public String toString() {
		return "{\"id\":" + id + ", \"url\":\"" + url + "\", \"count_remaining \": \"" + count_remaining + " \",  \"count_hit \": \""
				+ count_hit + " \",  \"user_id \": \"" + user_id + " \", \" user_type \": \"" + user_type + " \"}";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public long getCount_remaining() {
		return count_remaining;
	}

	public void setCount_remaining(long count_remaining) {
		this.count_remaining = count_remaining;
	}

	public long getCount_hit() {
		return count_hit;
	}

	public void setCount_hit(long count_hit) {
		this.count_hit = count_hit;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	

}
