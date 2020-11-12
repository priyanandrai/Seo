package com.seo.sendmail;

import java.io.File;
import java.io.IOException;
import java.util.Properties;
import java.util.Scanner;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class Sendmail {
	
	
		
		public static void SendMail (String from, String SenderName, String to, String greeting, String subject, String body, String Filepath) throws IOException  
		   {     
			
			final String username = "info";
			final String password = "SRCpass!";
		      // email ID of Recipient. 
		      String recipient = to; 
		     
		      // email ID of  Sender. 
		      String sender = from; 
		      
		      // using host as localhost 
		      String host = "mail.srcservicesltd.com"; 
		      System.out.println("host::"+host);
		  
		      // Getting system properties 
		      Properties props = new Properties(); 
		  
		      props.put("mail.smtp.starttls.enable", "true");
		        props.put("mail.smtp.auth", "true");
		        props.put("mail.smtp.host", host);
		        props.put("mail.smtp.port", "25");
//		        new InternetAddress(from, SenderName);
		       
		      
		      // creating session object to get properties 
		  //    Session session = Session.getDefaultInstance(properties); 
		  
		      Session session = Session.getInstance(props,
			          new javax.mail.Authenticator() {
			            protected PasswordAuthentication getPasswordAuthentication() {
			                return new PasswordAuthentication(username, password);
			            }
			          });
			        try {

			            Message message = new MimeMessage(session);
			            message.setFrom(new InternetAddress(sender,SenderName));
			            
			            message.setRecipients(Message.RecipientType.TO,
			                InternetAddress.parse(recipient));
			            message.setSubject(subject);
//			            message.setText("Dear User,"
//			                + "\n\n First Name:");

			            
			           // String body1 = "";
			            if (Filepath != null && Filepath != "")
			            {
			            File file = new File(Filepath);
			            System.out.println(file.getAbsolutePath());
			            Scanner myReader = new Scanner(file);
			            while (myReader.hasNextLine())
			            {
			            	
			            	 body = body.concat(myReader.nextLine());
			            	 //System.out.println(body);
			            }
			            myReader.close();
			            }
			            
			           // String greeting = "Hello Naveen";
			            Multipart multipart = new MimeMultipart( "alternative" );
				         
				         MimeBodyPart htmlPart = new MimeBodyPart();
				       
				         //htmlPart.setText(greeting);
						htmlPart.setContent( greeting +",<br>"  + body ,"text/html; charset=utf-8" );  
						//System.out.println(body);
				        // htmlPart.attachFile("C://Users//Lenovo//Desktop//abc.html", "text/html", "charset=utf-8");
						//htmlPart.atta
						//multipart.addBodyPart(part);
				         multipart.addBodyPart( htmlPart );
			            	message.setContent(multipart);
			            Transport.send(message);

			          //  System.out.println("Email is send");

			        } catch (MessagingException e) {
			            throw new RuntimeException(e);
			        }

		   } 

}
