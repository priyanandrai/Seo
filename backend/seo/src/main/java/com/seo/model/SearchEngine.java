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
	private String title;
	private String keyword;
	private String description;
	private String password;
	
	
	
	

	public SearchEngine(Long id, Long userId, String tasktype, String taskstatus, String date, String name,
			String emailaddress, String submiturl, String visualId, String title, String keyword, String description,
			String password) {
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
		this.title = title;
		this.keyword = keyword;
		this.description = description;
		this.password = password;
	}

	public SearchEngine() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "SearchEngine [id=" + id + ", userId=" + userId + ", tasktype=" + tasktype + ", taskstatus=" + taskstatus
				+ ", date=" + date + ", name=" + name + ", emailaddress=" + emailaddress + ", submiturl=" + submiturl
				+ ", visualId=" + visualId + ", title=" + title + ", keyword=" + keyword + ", description="
				+ description + ", password=" + password + "]";
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
}
