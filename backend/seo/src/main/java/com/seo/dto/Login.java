package com.seo.dto;

public class Login {
	String adminname="";
	String mobileNumber="";
	String password = "";
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	@Override
	public String toString() {
		return "This is my admin Login [mobileNumber=" + mobileNumber + ", password=" + password +", adminname=" + adminname + "]";
	}

	

}
