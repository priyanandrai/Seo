package com.seo.dto;

public class ProfileDto {

	private long id;
	private String name;
	private String email;
	private String profession;
	private String organisation;
	public ProfileDto(long id, String name, String email, String profession, String organisation) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.profession = profession;
		this.organisation = organisation;
	}
	@Override
	public String toString() {
		return "ProfileDto [id=" + id + ", name=" + name + ", email=" + email + ", profession=" + profession
				+ ", organisation=" + organisation + "]";
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
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getOrganisation() {
		return organisation;
	}
	public void setOrganisation(String organisation) {
		this.organisation = organisation;
	}
}
