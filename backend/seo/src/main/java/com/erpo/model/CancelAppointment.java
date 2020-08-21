package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cancelappointment")
public class CancelAppointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String select_appintment;
	private String reason;
	public CancelAppointment(Long id, String select_appintment, String reason) {
		super();
		this.id = id;
		this.select_appintment = select_appintment;
		this.reason = reason;
	}
	
	public CancelAppointment() {
		
	}

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"select_appintment\":\"" + select_appintment + "\", \"reason\":\"" + reason + "\"}";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSelect_appintment() {
		return select_appintment;
	}

	public void setSelect_appintment(String select_appintment) {
		this.select_appintment = select_appintment;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}
	
	
	
}
