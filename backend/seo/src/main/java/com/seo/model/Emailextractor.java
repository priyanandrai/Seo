package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="emailextractor")
public class Emailextractor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String userid;
	private String query;
	private String type;
	@Override
	public String toString() {
		return "Emailextractor [id=" + id + ", userid=" + userid + ", query=" + query + ", type=" + type + "]";
	}
	public Emailextractor(long id, String userid, String query, String type) {
		super();
		this.id = id;
		this.userid = userid;
		this.query = query;
		this.type = type;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
