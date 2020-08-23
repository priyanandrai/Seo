 package com.seo.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.seo.dto.Login;
import com.seo.model.SignUp;
import com.seo.services.ISignUpService;

@RestController
public class MainServices {
	
	@Autowired
	ISignUpService iSignUpService;

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
			// TODO: handle exception 
		}
	

		 return "{\"message\":\"Thank you registration\"}";
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping("/login")
	 String view1(@RequestBody Login login) {
		System.out.println("--------------"+ login.getMobileNumber());
		System.out.println("--------------"+ login.getPassword());
		List<SignUp> signup = (List<SignUp>) iSignUpService.findAll();
		System.out.println(signup.toString());
		for (int i = 0; i < signup.size(); i++) {
			if(signup.get(i).getPhoneNumber() == null ||signup.get(i).getPassword() == null ) {
				continue;
			}
			System.out.println(signup.get(i).getPhoneNumber());
			System.out.println(signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber()));
			System.out.println(signup.get(i).getPassword().equals(login.getPassword()));
			if(signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber()) && signup.get(i).getPassword().equals(login.getPassword()) ) {
				return signup.get(i).toString();
			}
		}
        return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}
	
	
	
		
//		@CrossOrigin(origins = "*")
//		@GetMapping("/getquestionofsurveyforPredefine")
//		public String getquestionofsurveyforPredefine (@RequestParam(defaultValue="") String type ) {
//			return com.erpo.bean.Bean.getquestionofsurveyforPredefine(type);
//		}
		
		
		
		}
