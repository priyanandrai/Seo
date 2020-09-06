package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="searchenginedetails")
public class SearchEngine {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Transient
	private Long userId;
	private String tasktype;
	private String todaydate;
	private String name;
	private String emailaddress;
	private String submiturl;
	public SearchEngine(Long id, Long userId, String tasktype, String todaydate, String name, String emailaddress,
			String submiturl) {
		super();
		this.id = id;
		this.userId = userId;
		this.tasktype = tasktype;
		this.todaydate = todaydate;
		this.name = name;
		this.emailaddress = emailaddress;
		this.submiturl = submiturl;
	}
	@Override
	public String toString() {
		return "SearchEngine [id=" + id + ", userId=" + userId + ", tasktype=" + tasktype + ", todaydate=" + todaydate
				+ ", name=" + name + ", emailaddress=" + emailaddress + ", submiturl=" + submiturl + "]";
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
	public String getTodaydate() {
		return todaydate;
	}
	public void setTodaydate(String todaydate) {
		this.todaydate = todaydate;
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
	
	

}
