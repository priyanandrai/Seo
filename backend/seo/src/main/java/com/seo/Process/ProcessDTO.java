package com.seo.Process;

import javax.persistence.Column;

import com.seo.model.SearchEngine;

public class ProcessDTO {
	
	private Long id;
	

	private Long userId;
	private String tasktype;
	private String taskstatus;
	private String date;
	private String name;
	private String emailaddress;
	private String submiturl;
	private String visualId;
	private String title;
	private String keyword;
	private String description;
	private String password;
	private String comments;
	private String reportpath;

	public ProcessDTO(SearchEngine searchengine) {
		this.id = searchengine.getId();
		this.userId = searchengine.getUserId();
		this.tasktype = searchengine.getTasktype();
		this.taskstatus = searchengine.getTaskstatus();
		this.date = searchengine.getDate();
		this.name = searchengine.getName();
		this.emailaddress = searchengine.getEmailaddress();
		this.submiturl = searchengine.getSubmiturl();
		this.visualId = searchengine.getVisualId();
		this.title = searchengine.getTitle();
		this.keyword = searchengine.getKeyword();
		this.description = searchengine.getDescription();
		this.password = searchengine.getPassword();
		this.comments = searchengine.getComments();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
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

	public String getTaskstatus() {
		return taskstatus;
	}

	public void setTaskstatus(String taskstatus) {
		this.taskstatus = taskstatus;
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

	public String getVisualId() {
		return visualId;
	}

	public void setVisualId(String visualId) {
		this.visualId = visualId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getReportpath() {
		return reportpath;
	}

	public void setReportpath(String reportpath) {
		this.reportpath = reportpath;
	}

}
