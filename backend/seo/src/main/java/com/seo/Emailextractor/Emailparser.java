package com.seo.Emailextractor;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Emailparser {
	public static Pattern ptn = Pattern.compile("([a-z0-9_.-]+)@([a-z0-9_.-]+[a-z])");
	
	public static List<String> captureValues(String largeText) 
	{
		Matcher mtch = ptn.matcher(largeText);
		List<String> email = new ArrayList<String>();
		while (mtch.find()) 
		{
			email.add(mtch.group());
			
		}
		return email;
	}
}
