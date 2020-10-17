package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contactus")

public class Contactus {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private String email;
	private String number;
	private String alternativeNumber;
	private String organization;
	private String requirement;
	private String attachment;
	public Contactus(long id, String name, String email, String number, String alternativeNumber, String organization,
			String requirement, String attachment) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.number = number;
		this.alternativeNumber = alternativeNumber;
		this.organization = organization;
		this.requirement = requirement;
		this.attachment = attachment;
	}
	@Override
	public String toString() {
		return "Contactus [id=" + id + ", name=" + name + ", email=" + email + ", number=" + number
				+ ", alternativeNumber=" + alternativeNumber + ", organization=" + organization + ", requirement="
				+ requirement + ", attachment=" + attachment + "]";
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getAlternativeNumber() {
		return alternativeNumber;
	}
	public void setAlternativeNumber(String alternativeNumber) {
		this.alternativeNumber = alternativeNumber;
	}
	public String getOrganization() {
		return organization;
	}
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	public String getRequirement() {
		return requirement;
	}
	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}
	public String getAttachment() {
		return attachment;
	}
	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}
	

}
