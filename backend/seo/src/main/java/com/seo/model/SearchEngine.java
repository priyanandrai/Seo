package com.seo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="taskprogress")
public class SearchEngine {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name="userid")
	private Long userId;
	private String tasktype;
	private String taskstatus;
	private String date;
	private String name;
	private String emailaddress;
	private String submiturl;
	@Column(name="visualid")
	private String visualId;
	
	
	
	
	public SearchEngine(Long id, Long userId, String tasktype, String taskstatus, String date, String name,
			String emailaddress, String submiturl, String visualId) {
		super();
		this.id = id;
		this.userId = userId;
		this.tasktype = tasktype;
		this.taskstatus = taskstatus;
		this.date = date;
		this.name = name;
		this.emailaddress = emailaddress;
		this.submiturl = submiturl;
		this.visualId = visualId;
	}
	
	
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"userId\":\"" + userId + "\", \"tasktype\":\"" + tasktype + "\", \"taskstatus\":\"" + taskstatus
				+ "\", \"todaydate\":\"" + date + "\", \"name\":\"" + name + "\", \"emailaddress\":\"" + emailaddress + "\", \"submiturl\":\""
				+ submiturl + "\", \"visualId\":\"" + visualId + "\"}";
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getTasktype() {
		return tasktype;
	}
	public void setTasktype(String tasktype) {
		this.tasktype = tasktype;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailaddress() {
		return emailaddress;
	}
	public void setEmailaddress(String emailaddress) {
		this.emailaddress = emailaddress;
	}
	public String getSubmiturl() {
		return submiturl;
	}
	public void setSubmiturl(String submiturl) {
		this.submiturl = submiturl;
	}
	
	public String getTaskstatus() {
		return taskstatus;
	}
	public void setTaskstatus(String taskstatus) {
		this.taskstatus = taskstatus;
	}
	public String getVisualId() {
		return visualId;
	}
	public void setVisualId(String visualId) {
		this.visualId = visualId;
	}

}
