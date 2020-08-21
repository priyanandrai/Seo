package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="message")
public class Message {
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
		private Long id;
		private String recipient;
		private String from;
		private String subject;
		private String message;
		

	    public Message() {
	        super();
	    }
	    
		public Message(Long id, String recipient, String subject, String message, String from) {
			super();
			this.id = id;
			this.recipient = recipient;
			this.subject = subject;
			this.message = message;
			this.from = from;
		}
		public String getFrom() {
			return from;
		}

		public void setFrom(String from) {
			this.from = from;
		}

		@Override
		public String toString() {
			return "{\"id\":\"" + id + "\", \"recipient\":\"" + recipient + "\", \"subject\":\"" + 
		subject + "\", \"message\":\"" + message + "\", \"from\":\"" + from + "\"}";
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getRecipient() {
			return recipient;
		}
		public void setRecipient(String recipient) {
			this.recipient = recipient;
		}
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		
}
