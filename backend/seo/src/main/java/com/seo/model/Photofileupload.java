package com.seo.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="photofileupload")

public class Photofileupload {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String photoname;
	 private byte[] data;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPhotoname() {
		return photoname;
	}
	public void setPhotoname(String photoname) {
		this.photoname = photoname;
	}
	public byte[] getData() {
		return data;
	}
	public void setData(byte[] data) {
		this.data = data;
	}
	public Photofileupload(long id, String photoname, byte[] data) {
		super();
		this.id = id;
		this.photoname = photoname;
		this.data = data;
	}
	public Photofileupload() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Photofileupload [id=" + id + ", photoname=" + photoname + ", data=" + Arrays.toString(data) + "]";
	}
	
	
}
