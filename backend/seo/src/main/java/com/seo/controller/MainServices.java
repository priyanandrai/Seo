package com.seo.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.seo.dto.Login;
import com.seo.model.SearchEngine;
import com.seo.model.SignUp;
import com.seo.services.ISignUpService;
import com.seo.services.SearchEngineservice;

@RestController
public class MainServices {

	@Autowired
	ISignUpService iSignUpService;
	@Autowired
	SearchEngineservice searchEngineService;

	@Autowired
	private  Environment env;
	

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String showsignUp (@RequestBody SignUp  signup) {
		try {
			Iterator<SignUp> iterable =  iSignUpService.findAll().iterator();
			while(iterable.hasNext()) {
				SignUp signUp2 = iterable.next();
				if(signUp2.getEmail().equalsIgnoreCase(signup.getEmail())) {
					return "{\"message\":\"User already exist .Please try to login ot forget password\"}";
				}
			}		
			iSignUpService.save(signup);
		} catch (Exception e) {
			e.printStackTrace(); 
		}
		return "{\"message\":\"Thank you registration\"}";
	}


	@CrossOrigin(origins = "*")
	@PostMapping("/forgetPassword")
	public String showsignUp (@RequestBody Login login) {
		try {
			List<SignUp> signup = (List<SignUp>) iSignUpService.findAll();
			System.out.println(signup.toString());
			for (int i = 0; i < signup.size(); i++) {
				if(signup.get(i).getPhoneNumber() == null ||signup.get(i).getPassword() == null ) {
					continue;
				}
				if(signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber()) ) {
					return "{\"message\":\"Please check your Phone for OTP\"}";
				}
			}
			return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";

		} catch (Exception e) {
			return "{\"message\":\"Error in sending message , Please try again \"}";
		}
	}


	@CrossOrigin(origins = "*")
	@GetMapping("/validateotp")
	public String validateotp (@RequestParam(defaultValue="") String otp) {
		try {
			return "{\"message\":\"Otp Validation done suscessfully\"}";
		} catch (Exception e) {
			return "{\"message\":\"Error in sending message , Please try again \"}";
		}
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	String view1(@RequestBody Login login) {
		List<SignUp> signup = (List<SignUp>) iSignUpService.findAll();
		System.out.println(signup.toString());
		for (int i = 0; i < signup.size(); i++) {
			if(signup.get(i).getPhoneNumber() == null ||signup.get(i).getPassword() == null ) {
				continue;
			}
			if(signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber()) && signup.get(i).getPassword().equals(login.getPassword()) ) {
				return signup.get(i).toString();
			}
		}
		return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getprofile")
	public  Optional<SignUp> validateotp (@RequestParam("id") Long id) {
		try {
			Optional<SignUp> signup=this.iSignUpService.findById(id);
			return signup;
		} catch (Exception e) {
			Optional<SignUp> signup=null;
			return signup;
		}
		
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/starttask")
	SearchEngine starttask(@RequestBody SearchEngine searchengine) {
		try { 
		
		if(searchengine.getName() == null ||searchengine.getEmailaddress() == null||searchengine.getSubmiturl()==null) {
			searchengine=null;
			return searchengine;
			}
		else {
			 searchEngineService.savedatail(searchengine);
			 return searchengine;
		}
		}catch (Exception e) {
			searchengine=null;
			return searchengine;
		}
		
		
	}
	 
}



