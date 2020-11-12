package com.seo.sendmail;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class Sendmail {
	
	public static void SendMail(String from, String to, String subject, String body) {
		
				// email ID of Recipient. 
	      String recipient = to; 
	    
	    // email ID of  Sender. 
	      String sender = from; 
	     
	    // using host as localhost 
	      String host = "mail.srcservicesltd.com"; 
	     
	  
	      // Getting system properties 
	      Properties properties = System.getProperties(); 
	  
	      // Setting up mail server 
	      properties.setProperty("mail.smtp.host", host); 
	  
	      // creating session object to get properties 
	      Session session = Session.getDefaultInstance(properties); 
	      
	  //    MimeMessage message = new MimeMessage( session );
		    

		   

		   //  multipart.addBodyPart( textPart );
		   

	      
	      
	  
	      try 
	      { 
	         // MimeMessage object. 
	         MimeMessage message = new MimeMessage(session); 
	  
	        Multipart multipart = new MimeMultipart( "alternative" );
	         
	         MimeBodyPart htmlPart = new MimeBodyPart();
			 htmlPart.setContent( body, "text/html; charset=utf-8" );  
	         
			 multipart.addBodyPart( htmlPart );
			 message.setContent( multipart );
	         
	         // Set From Field: adding senders email to from field. 
	         message.setFrom(new InternetAddress(sender)); 
	  
	         // Set To Field: adding recipient's email to from field. 
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient)); 
	  
	         // Set Subject: subject of the email 
	         message.setSubject(subject); 
	  
	         // set body of the email. 
	        // message.setText(body); 
	  
	         // Send email. 
	         Transport.send(message); 
	         System.out.println("Mail successfully sent"); 
	      } 
	      catch (MessagingException mex)  
	      { 
	         mex.printStackTrace(); 
	      } 
	   
		
	}

}
