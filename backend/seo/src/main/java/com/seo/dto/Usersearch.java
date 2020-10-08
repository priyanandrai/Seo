package com.seo.dto;

public class Usersearch {

	
	Long uniqueid;
	String mobileNumber;
	public Long getUniqueid() {
		return uniqueid;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	@Override
	public String toString() {
		return "Usersearch [uniqueid=" + uniqueid + ", mobileNumber=" + mobileNumber + "]";
	}
	
	
}
