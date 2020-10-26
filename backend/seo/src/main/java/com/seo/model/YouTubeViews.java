package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="youtubeviews")
public class YouTubeViews {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String url;
	
	private String email;

	private long remaining_balance_views;

	private long archieved_views;
	
	private String user_id;

	private String user_type;
	
	public YouTubeViews() {
		
	}

	public YouTubeViews(long id, String url, String email, long remaining_balance_views, long archieved_views,
			String user_id, String user_type) {
		super();
		this.id = id;
		this.url = url;
		this.email = email;
		this.remaining_balance_views = remaining_balance_views;
		this.archieved_views = archieved_views;
		this.user_id = user_id;
		this.user_type = user_type;
	}

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"url\":\"" + url + "\", \"email\":\"" + email + "\", \"remaining_balance_views\":\""
				+ remaining_balance_views + "\", \"archieved_views\":\"" + archieved_views + "\", \"user_id\":\"" + user_id
				+ "\", \"user_type\":\"" + user_type + "\"}";
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getRemaining_balance_views() {
		return remaining_balance_views;
	}

	public void setRemaining_balance_views(long remaining_balance_views) {
		this.remaining_balance_views = remaining_balance_views;
	}

	public long getArchieved_views() {
		return archieved_views;
	}

	public void setArchieved_views(long archieved_views) {
		this.archieved_views = archieved_views;
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
