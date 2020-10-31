package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="activity")
public class Activity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String username;
	private String user_id;
	private String time;
	private String activity;
	public Activity(Long id, String username, String user_id, String time, String activity) {
		super();
		this.id = id;
		this.username = username;
		this.user_id = user_id;
		this.time = time;
		this.activity = activity;
	}

	public Activity() {
		
	}

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"username\":\"" + username + "\", \"user_id\":\"" + user_id + "\", \"time\":\"" + time
				+ "\", \"activity\":\"" + activity + "\"}";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}
	
	
	
}
